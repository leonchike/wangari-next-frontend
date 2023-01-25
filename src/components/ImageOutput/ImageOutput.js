const ImageOutput = ({ jpg, webp, alt }) => {
  return (
    <picture>
      <source type="image/webp" srcSet={webp} />
      <source type="image/jpeg" srcSet={jpg} />
      <img src={jpg} alt={alt} />
    </picture>
  );
};

export default ImageOutput;
