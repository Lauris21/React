import './series.css';

import { useState, useEffect } from 'react';

import Gallery from './../../components/gallery/Gallery';
import { getData } from '../../api/api';
import { filtererdData } from '../../components/FilteredData';

const Series = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getData().then((res) => setSeries(filtererdData(res, 'series')));
  }, []);

  return (
    <>
      <h1>Popular Series</h1>
      <div className="seriesGallery">
        <Gallery item={series} />
      </div>
    </>
  );
};

export default Series;
