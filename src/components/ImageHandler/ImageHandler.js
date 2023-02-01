import styled from "styled-components";

import ImageUpload from "@/components/ImageUpload";
import ImageOutput from "@/components/ImageOutput";
import Button from "@/components/Button";

const ImageHandler = ({ id, image, intent, dispatch }) => {
  // check if image object values are not truthy
  const checkImageObject = () => {
    if (!image.jpg) {
      return false;
    }
    return true;
  };

  const imageStatus = checkImageObject();

  const handleHandleChangeImage = () => {
    dispatch({ id: id, type: "CHANGED_IMAGE" });
  };

  return (
    <>
      {imageStatus ? (
        <>
          <ImageOutput jpg={image.jpg} webp={image.webpSmall} alt={image.alt} />
          <ChangeButtonWrapper>
            <StyledButton onClick={handleHandleChangeImage}>
              Change Image
            </StyledButton>
          </ChangeButtonWrapper>
        </>
      ) : (
        <ImageUpload id={id} intent={intent} dispatch={dispatch} />
      )}
    </>
  );
};

const ChangeButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const StyledButton = styled(Button)`
  color: var(--color-offblack);
  background-color: var(--color-white);
  box-shadow: var(--box-shadow);
`;

export default ImageHandler;
