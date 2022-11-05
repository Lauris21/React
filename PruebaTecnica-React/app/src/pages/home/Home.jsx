import './home.css';

import { Link } from 'react-router-dom';

import Image from '../../components/Image';

const Home = () => {
  return (
    <>
      <h1>Popular Titles</h1>
      <div className="divHome">
        <div>
          <section>
            <figure className="homeFigure">
              <Link to="/series">
                <Image src={'./../../../assets/placeholder.png'} alt={'logo series'} />
                <h3>SERIES</h3>
              </Link>
            </figure>
            <p>Popular series</p>
          </section>
          <section>
            <figure className="homeFigure">
              <Link to="/movies">
                <Image src={'./../../../assets/placeholder.png'} alt={'logo movies'} />
                <h3>MOVIES</h3>
              </Link>
            </figure>
            <p>Popular series</p>
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
