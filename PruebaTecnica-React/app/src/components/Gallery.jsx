import Image from './image';
import PopupDiv from './popUP/Popup';

const Gallery = ({ item }) => {
  console.log(PopupDiv);
  return (
    <>
      {item ? (
        item.map((elem) => (
          <figure key={elem.title}>
            <Image src={elem.images['Poster Art'].url} alt={elem.title} />
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
