import styled from "styled-components";

// State and API
import { useCollectionDispatch } from "@/context/adminCollectionContext";

import { QUERIES } from "@/styles/styleConstants";
import ImageHandler from "@/components/ImageHandler";
import AssetDetails from "@/components/DashCollectionComponents/AssetDetails";

const Asset = ({ collectionId, data }) => {
  const dispatch = useCollectionDispatch();
  console.log(data);

  const image = {
    jpg: data?.assetURL,
    webp: data?.assetURLWebPOriginalSize,
    alt: "asset image",
  };

  const handleChangeImage = () => {
    dispatch({ id: data._id, type: "REMOVE_ASSET_IMAGE_FROM_VIEW" });
  };

  const imageUpdatedWithAPIRepsonse = (jpg) => {
    dispatch({ id: data._id, type: "ASSET_IMAGE_UPDATED", assetURL: jpg });
  };

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageHandler
          id={data._id}
          image={image}
          intent="assetImage"
          handleChangeImage={handleChangeImage}
          imageUpdatedWithAPIRepsonse={imageUpdatedWithAPIRepsonse}
        />
      </ImageWrapper>
      <AssetDetails data={data} />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 2rem 1rem;
  margin-block-end: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: minmax(300px, 0.5fr) 1fr;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: minmax(400px, 0.7fr) 1fr;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 400px;
  object-fit: contain;

  & > img {
    object-fit: contain;
    position: relative;
    opacity: 1;
  }
`;

const FormWrapper = styled.div``;

export default Asset;
