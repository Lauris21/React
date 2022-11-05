import './movies.css';

import { useState, useEffect } from 'react';

import Gallery from './../../components/Gallery';

import { getData } from '../../api/api';
import { filtererdData } from '../../components/FilteredData';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData().then((res) => setMovies(filtererdData(res, 'movie')));
  }, []);

  return (
    <>
      <h1>Popular Movies</h1>
      <div className="movieGallery">
        <Gallery item={movies} />
      </div>
    </>
  );
};

export default Movies;
