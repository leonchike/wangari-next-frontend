import styled from "styled-components";

import ImageUpload from "@/components/ImageUpload";
import ImageOutput from "@/components/ImageOutput";
import Button from "@/components/Button";

interface ImageHandlerProps {
  id: string;
  image: {
    jpg: string;
    webp: string;
    alt: string;
  };
  intent: string;
  handleChangeImage: () => void;
  imageUpdatedWithAPIRepsonse: (arg0: string) => void;
}

const ImageHandler = ({
  id,
  image,
  intent,
  handleChangeImage,
  imageUpdatedWithAPIRepsonse,
}: ImageHandlerProps) => {
  // check if image object values are not truthy
  const checkImageObject = () => {
    if (!image.jpg) {
      return false;
    }
    return true;
  };

  const imageStatus = checkImageObject();

  return (
    <>
      {imageStatus ? (
        <>
          <ImageOutput
            data-active="true"
            jpg={image.jpg}
            webp={image.webp}
            alt={image.alt}
          />
          <ChangeButtonWrapper>
            <StyledButton onClick={handleChangeImage}>
              Change Image
            </StyledButton>
          </ChangeButtonWrapper>
        </>
      ) : (
        <ImageUpload
          id={id}
          intent={intent}
          imageUpdatedWithAPIRepsonse={imageUpdatedWithAPIRepsonse}
        />
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
