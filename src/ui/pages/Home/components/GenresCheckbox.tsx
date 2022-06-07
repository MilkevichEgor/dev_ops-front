import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { setGenres } from '../../../../store/genreReducer';
import bookApi, { QuerySearchOptions } from '../../../../api/bookApi';
import { Genre } from '../../../../types';
import CommonButton from '../../../components/CommonButton';
import GenreCheckboxWrapper from './GenresCheckbox.styles';

type GenreCheckboxProps = {
  toggleGenreSelector: () => void;
  onSubmit: (values: string[]) => void;
}

const GenresCheckbox: React.FC<GenreCheckboxProps> = (props) => {
  const [checkedGenres, setCheckedGenres] = useState([] as string[]);
  const genres = useAppSelector((state) => state.genreReducer.genres);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = {} as QuerySearchOptions;

  useEffect(() => {
    searchParams.forEach((value, key) => {
      Object.assign(search, { [key]: value });
      const genresFromQuery = search.genres?.split(',');
      if (genresFromQuery) {
        setCheckedGenres(genresFromQuery);
      }
    });
  }, [searchParams]);

  const getValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedGenreId = e.target.value;

    if (checkedGenres.includes(checkedGenreId)) {
      const filteredGenres = checkedGenres.filter((i) => i !== checkedGenreId);
      return setCheckedGenres(filteredGenres);
    }
    setCheckedGenres([...checkedGenres, checkedGenreId]);
  };

  return (
    <GenreCheckboxWrapper
      onClick={(e) => {
        e.stopPropagation();
        props.onSubmit(checkedGenres);
        props.toggleGenreSelector();
      }}
    >
      <div
        className="genres-block"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {genres.map((genre) => {
          return (
            <div
              key={genre.genreId}
              className="option"

            >
              <input
                className="checkbox"
                type="checkbox"
                name={genre.name}
                value={genre.genreId}
                checked={checkedGenres.includes(`${genre.genreId}`)}
                onChange={getValues}
              />
              {genre.name}
            </div>
          );
        })}
      </div>
      <CommonButton
        text="Submit"
      />
    </GenreCheckboxWrapper>
  );
};

export default GenresCheckbox;
