import ImageUpload from "@/components/ImageUpload";
import ImageOutput from "@/components/ImageOutput";
import Button from "@/components/Button";

const ImageHandler = ({ image, dispatch }) => {
  // check if image object values are not truthy
  const checkImageObject = () => {
    if (!image.jpg && !image.webpSmall && !image.webpOriginal) {
      return false;
    }
    return true;
  };

  const imageStatus = checkImageObject();

  const handleHandleChangeImage = () => {
    dispatch({ type: "CHANGE_IMAGE" });
  };

  return (
    <>
      {imageStatus ? (
        <ImageOutput jpg={image.jpg} webp={image.webpSmall} alt={image.alt} />
      ) : (
        <ImageUpload dispatch={dispatch} />
      )}
      <button onClick={handleHandleChangeImage}>Change Image</button>
    </>
  );
};

export default ImageHandler;
