import { useState } from "react";

const ImageUpload = () => {
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
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      {error && <p>{error}</p>}
      {image && (
        <picture>
          <source type="image" srcSet={URL.createObjectURL(image)} />
          <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
        </picture>
      )}
    </div>
  );
};

export default ImageUpload;
