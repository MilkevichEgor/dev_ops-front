import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { useAppSelector } from '../../../../store';
import GenreCheckboxWrapper from './GenresCheckbox.styles';
import getQueryParams from '../../../../utils/getQueryParams';

type GenreCheckboxProps = {
  toggleGenreSelector: () => void;
}

const GenresCheckbox: React.FC<GenreCheckboxProps> = () => {
  const [checkedGenres, setCheckedGenres] = useState([] as string[]);
  const genres = useAppSelector((state) => state.genreReducer.genres);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = getQueryParams(searchParams);
    const genresFromQuery = query.genres?.split(',');
    if (genresFromQuery) {
      setCheckedGenres(genresFromQuery);
    }
  }, [searchParams]);

  useEffect(() => {
    (() => {
      const arr = queryString.stringify(
        {
          genres: checkedGenres,
        },
        {
          arrayFormat: 'comma',
        },
      );
      setSearchParams(arr);
    })();
  }, [checkedGenres]);

  const getValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedGenreId = e.target.value;

    if (checkedGenres.includes(checkedGenreId)) {
      const filteredGenres = checkedGenres.filter((genre) => genre !== checkedGenreId);
      return setCheckedGenres(filteredGenres);
    }
    setCheckedGenres([...checkedGenres, checkedGenreId]);
  };

  return (
    <GenreCheckboxWrapper
      onClick={(e) => {
        e.stopPropagation();
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
    </GenreCheckboxWrapper>
  );
};

export default GenresCheckbox;
