import Image from './image';

const Gallery = ({ item }) => {
  return (
    <>
      {item ? (
        item.map((elem) => (
          <figure key={elem.title}>
            <Image src={elem.images['Poster Art'].url} alt={elem.title} />
            <p>{elem.title}</p>
          </figure>
        ))
      ) : (
        <p>Not Found</p>
      )}
    </>
  );
};

export default Gallery;
