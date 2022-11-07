import './movies.css';

import { useState, useEffect } from 'react';

import Gallery from './../../components/gallery/Gallery';

import { getData } from '../../api/api';
import { filtererdData } from '../../components/FilteredData';
import Loading from '../../components/Loading';
import Error from '../../components/error';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getData().then((res) => {
      if (res === false) {
        return setMovies(res);
      } else if (filter === '') {
        setMovies(filtererdData(res, 'movie'));
        setIsLoading(false);
      } else {
        setMovies(filtererdData(res, 'movie'));
        setMovies(movies.filter((item) => item.releaseYear == filter));
        setIsLoading(false);
      }
    });
  }, [filter]);

  return (
    <>
      <div className="popular">
        <h1>Popular Movies</h1>
        <input
          type="number"
          min="2010"
          max="2022"
          name="filterYearMovie"
          id="filterYearMovie"
          onChange={(ev) => setFilter(ev.target.value)}
        />
      </div>
      <div className="movieGallery">
        {movies === [] ? (
          <p>No matches</p>
        ) : movies ? (
          isLoading ? (
            <Loading />
          ) : (
            <Gallery item={movies} param="movies" />
          )
        ) : (
          <Error />
        )}
      </div>
    </>
  );
};

export default Movies;
