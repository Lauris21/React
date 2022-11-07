import './detail.css';

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getData } from '../../api/api';

const DetailSeries = () => {
  const params = useParams();
  const { title } = params;
  const [filter, setFilter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log(title);
    getData().then((res) => {
      setFilter(res.filter((item) => item.title === title)[0]);
    });
  }, [title]);

  return (
    <div className="detail">
      <div>
        <section>
          <h2>{filter.title}</h2>
          <h3>{filter.releaseYear}</h3>
          <p>{filter.description}</p>
        </section>
      </div>
      <button className="btnDetail" type="button" onClick={(ev) => navigate('/series')}>
        Back
      </button>
    </div>
  );
};
export default DetailSeries;
