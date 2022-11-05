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

  useEffect(() => {
    setIsLoading(true);
    getData().then((res) => {
      if (res === false) {
        return setSeries(res);
      } else {
        setTimeout(() => {
          setSeries(filtererdData(res, 'series'));
          setIsLoading(false);
        }, 2000);
      }
    });
  }, []);

  return (
    <>
      <div className="popular">
        <h1>Popular Series</h1>
      </div>
      <div className="seriesGallery">
        {series ? isLoading ? <Loading /> : <Gallery item={series} /> : <Error />}
      </div>
    </>
  );
};

export default Series;
