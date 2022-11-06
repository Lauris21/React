import './series.css';

import { useState, useEffect } from 'react';

import Gallery from './../../components/gallery/Gallery';
import { getData } from '../../api/api';
import { filtererdData } from '../../components/FilteredData';
import Loading from '../../components/Loading';
import Error from '../../components/error';

const Series = () => {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getData().then((res) => {
      if (res === false) {
        return setSeries(res);
      } else if (filter === '') {
        setTimeout(() => {
          setSeries(filtererdData(res, 'series'));
          setIsLoading(false);
        }, 2000);
      } else {
        setSeries(filtererdData(res, 'series'));
        setTimeout(() => {
          setSeries(series.filter((item) => item.releaseYear == filter));
          setIsLoading(false);
        }, 1500);
      }
    });
  }, [filter]);

  return (
    <>
      <div className="popular">
        <h1>Popular Series</h1>
        <input
          type="number"
          min="2010"
          max="2022"
          name="filterYearSerie"
          id="filterYearSerie"
          onChange={(ev) => setFilter(ev.target.value)}
        />
      </div>
      <div className="seriesGallery">
        {series ? (
          isLoading ? (
            <Loading />
          ) : (
            <Gallery item={series} section="series" />
          )
        ) : (
          <Error />
        )}
      </div>
    </>
  );
};

export default Series;
