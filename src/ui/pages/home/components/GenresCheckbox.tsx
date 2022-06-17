import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../store';
import GenreCheckboxWrapper from '../styles/GenresCheckbox.styles';
import arrowUpIcon from '../../../images/arrowUp.png';
import useQuery from '../../../../utils/useQuery';
import { QuerySearchOptions } from '../../../../types';
import checkedIcon from '../../../images/checkboxChecked.png';
import unchekedIcon from '../../../images/checkboxUnchecked.png';

type GenreCheckboxProps = {
  toggleGenreSelector: () => void;
}

const GenresCheckbox: React.FC<GenreCheckboxProps> = () => {
  const [checkedGenres, setCheckedGenres] = useState<string[]>([]);
  const genres = useAppSelector((state) => state.genreReducer.genres);
  const [parsedParams, setParams] = useQuery<QuerySearchOptions>();

  useEffect(() => {
    if (parsedParams.genres) {
      const genresFromQuery = parsedParams.genres.split(',');

      if (genresFromQuery.length !== 0) {
        setCheckedGenres(genresFromQuery);
      }
    }
  }, [parsedParams.genres]);

  const updateFilterQuery = (genres: string[]) => {
    parsedParams.genres = genres.toString();
    setParams(parsedParams);
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
                  hidden
                />
                {checkedGenres.includes(`${genre.genreId}`)
                  ? <img className="checkbox_icon" src={checkedIcon} />
                  : <img className="checkbox_icon" src={unchekedIcon} />
                }
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
