const Image = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.target.src =
          'https://img.freepik.com/vector-premium/diseno-error-404-robot-roto_23-2147730666.jpg';
      }}
    />
  );
};

export default Image;
