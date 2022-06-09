import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'query-string';
import { useAppSelector } from '../../../../store';
import GenreCheckboxWrapper from './GenresCheckbox.styles';
import getQueryParams from '../../../../utils/getQueryParams';
import arrowUpIcon from '../../../images/arrowUp.png';

type GenreCheckboxProps = {
  toggleGenreSelector: () => void;
}

const GenresCheckbox: React.FC<GenreCheckboxProps> = () => {
  const [checkedGenres, setCheckedGenres] = useState<string[]>([]);
  const genres = useAppSelector((state) => state.genreReducer.genres);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = getQueryParams(searchParams);

  useEffect(() => {
    const genresFromQuery = query.genres?.split(',');
    if (genresFromQuery) {
      setCheckedGenres(genresFromQuery);
    }
  }, [searchParams]);

  const updateFilterQuery = (genres: string[]) => {
    query.genres = genres.toString();
    const arr = queryString.stringify(query, { skipEmptyString: true });
    setSearchParams(arr);
  };

  const getValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkedGenreId = e.target.value;
    let filteredGenres: string[] = [];

    if (checkedGenres.includes(checkedGenreId)) {
      filteredGenres = checkedGenres.filter((genre) => {
        return genre !== checkedGenreId;
      });
    } else {
      filteredGenres = [...checkedGenres, checkedGenreId];
    }

    updateFilterQuery(filteredGenres);
    setCheckedGenres(filteredGenres);
  };

  return (
      <GenreCheckboxWrapper
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img src={arrowUpIcon} className="arrow-up" />
        <div
          className="genres-block"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {genres.map((genre) => {
            return (
              <label htmlFor={genre.genreId.toString()} key={genre.genreId}>
                <div
                  key={genre.genreId}
                  className="option"
                >
                  <input
                    id={genre.genreId.toString()}
                    className="checkbox"
                    type="checkbox"
                    name={genre.name}
                    value={genre.genreId}
                    checked={checkedGenres.includes(`${genre.genreId}`)}
                    onChange={getValues}
                  />
                  {genre.name}
                </div>
              </label>
            );
          })}
        </div>
      </GenreCheckboxWrapper>
  );
};

export default GenresCheckbox;