import Image from "next/image";

const ImageOutput = ({ jpg, webp, alt }) => {
  return (
    // <picture>
    //   {webp && <source type="image/webp" srcSet={webp} />}
    //   {jpg && <source type="image/jpeg" srcSet={jpg} />}
    //   <img src={jpg} alt={alt} />
    // </picture>
    <Image src={jpg} alt={alt} fill quality={75} />
  );
};

export default ImageOutput;
