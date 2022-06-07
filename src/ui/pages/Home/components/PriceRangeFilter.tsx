import React from 'react';
import styled from 'styled-components';

const PriceFilterWrapper = styled.div`
  width: 413px;
  height: 151px;
  background: #F0F4EF;
  border-radius: 16px;
  position: absolute;
  top: 74px;
  left: 0;

  input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
}
`;

const PriceFilter = () => {
  return (
    <PriceFilterWrapper>
      <input type="range" name="priceRange" id="priceRange" />
    </PriceFilterWrapper>
  );
};

export default PriceFilter;
