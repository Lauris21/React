import './gallery.css';

import Image from '../image';
import PopupDiv from '../popUP/Popup';
import { Link } from 'react-router-dom';

const Gallery = ({ item }) => {
  return (
    <>
      {item ? (
        item.map((elem) => (
          <figure key={elem.title}>
            <Link to={`/${elem.title}`}>
              <Image src={elem.images['Poster Art'].url} alt={elem.title} />
            </Link>
            <PopupDiv elem={elem} />
          </figure>
        ))
      ) : (
        <p>Not Found</p>
      )}
    </>
  );
};

export default Gallery;
