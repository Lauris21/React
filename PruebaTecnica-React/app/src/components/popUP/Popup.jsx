import './popUp.css';

import Popup from 'reactjs-popup';
import Image from '../image';

const PopupDiv = ({ elem }) => {
  return (
    <Popup trigger={<button className="buttonPop">{elem.title}</button>} modal nested>
      {(close) => (
        <div className="popUp">
          <button className="buttonClose" onClick={close}>
            &times;
          </button>
          <figure style={{ backgroundImage: `url(${elem.images['Poster Art'].url})` }}>
            <div>
              <Image src={elem.images['Poster Art'].url} alt={elem.title} />
              <section>
                <h2>{elem.title}</h2>
                <p>{elem.description}</p>
                <h3>{elem.releaseYear}</h3>
              </section>
            </div>
          </figure>
        </div>
      )}
    </Popup>
  );
};

export default PopupDiv;
