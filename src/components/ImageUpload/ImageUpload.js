import { useState, useId } from "react";
import styled from "styled-components";

import Icon from "@/components/Icon";

import { uploadImage } from "@/utils/Api/uploadImage";

const ImageUpload = ({ id, intent, dispatch }) => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    let selectedFile;

    if (e.target.files && e.target.files.length > 0) {
      selectedFile = e.target.files[0];
    } else {
      setError("No file selected");
      return;
    }

    if (selectedFile.type.match(/image\/*/) == null) {
      setError("File is not an image");
      return;
    }

    setImage(selectedFile);
    setError(null);

    uploadImage(id, selectedFile, intent).then((response) => {
      // check is response ends with .jpg
      if (response.endsWith(".jpg")) {
        dispatch({ id: id, type: "IMAGE_UPDATED", jpg: response });
        console.log(response);
      } else {
        setError(response);
      }
    });
  };

  const imageUploadId = useId();

  const handleAddFile = () => {
    document.getElementById(`${imageUploadId}`).click();
  };

  return (
    <UploadWrapper onClick={handleAddFile} data-image={!!image}>
      {!image && (
        <IconWrapper>
          <Icon id="upload" size="3rem" />
          <p>Click to upload image</p>
        </IconWrapper>
      )}
      <input id={imageUploadId} type="file" onChange={handleChange} />
      {error && <p>{error}</p>}
      {image && (
        <picture>
          <source type="image" srcSet={URL.createObjectURL(image)} />
          <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
        </picture>
      )}
    </UploadWrapper>
  );
};

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  min-height: minmax(min-content, 300px);
  border: 1px dashed var(--color-primary);
  border-radius: var(--border-radius);

  &[data-image="true"] {
    border: none;
  }

  & > input {
    opacity: 0;
    pointer-events: none;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-block-start: 3rem;
  padding-block-end: 2rem;
  pointer-events: none;
`;

export default ImageUpload;
