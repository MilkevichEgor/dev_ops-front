import React, { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import queryString from 'query-string';

import { useSearchParams } from 'react-router-dom';
import PriceFilterWrapper from '../components/PriceFilter.styles';
import getQueryParams from '../../../../utils/getQueryParams';
import arrowUpIcon from '../../../images/arrowUp.png';

interface MultiRangeSliderProps {
  min: number;
  max: number;
}

const PriceFilter: FC<MultiRangeSliderProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [minVal, setMinVal] = useState(props.min);
  const [maxVal, setMaxVal] = useState(props.max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - props.min) / (props.max - props.min)) * 100),
    [props.min, props.max],
  );

  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  const setPriceRange: React.MouseEventHandler<HTMLDivElement> = () => {
    const query = getQueryParams(searchParams);
    query.priceFrom = minVal.toString();
    query.priceTo = maxVal.toString();
    const arr = queryString.stringify(
      query,
    );
    setSearchParams(arr);
  };

  return (
    <PriceFilterWrapper
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <img src={arrowUpIcon} className="arrow-up" />

      <input
        type="range"
        min={props.min}
        max={props.max}
        value={minVal}
        ref={minValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+event.target.value, maxVal - 1);
          setMinVal(value);
          event.target.value = value.toString();
        }}
        onMouseUp={setPriceRange}
        className={classnames('thumb thumb--zindex-3', {
          'thumb--zindex-5': minVal > props.max - 100,
        })}
      />
      <input
        type="range"
        min={props.min}
        max={props.max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+event.target.value, minVal + 1);
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        onMouseUp={setPriceRange}
        className="thumb thumb--zindex-4"
      />

      <div className="slider">
        <div className="slider__track"></div>
        <div ref={range} className="slider__range"></div>
        <div
          className="slider__left-value"
        >
          {`$ ${minVal}`}
        </div>
        <div
          className="slider__right-value"
        >
          {`$ ${maxVal}`}
        </div>
      </div>
    </PriceFilterWrapper>
  );
};

export default PriceFilter;
