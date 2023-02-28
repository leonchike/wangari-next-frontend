import styled from "styled-components";

// State and API
import {
  useCollectionDispatch,
  useCollectionState,
} from "@/context/adminCollectionContext";

import { QUERIES } from "@/styles/styleConstants";
import ImageHandler from "@/components/ImageHandler";
import AssetDetails from "@/components/DashCollectionComponents/AssetDetails";

import { AssetData } from "@/types/apiTypes";
import Image from "next/image";

interface Props {
  data: AssetData;
}

const Asset = ({ data }: Props) => {
  const dispatch = useCollectionDispatch();
  const state = useCollectionState();

  const image = {
    jpg: data?.assetURL,
    webp: data?.WebPOriginalSizePublicURL,
    alt: "asset image",
  };

  const handleChangeImage = () => {
    // @ts-ignore
    dispatch({ id: data._id, type: "REMOVE_ASSET_IMAGE_FROM_VIEW" });
  };

  const imageUpdatedWithAPIRepsonse = (jpg: string) => {
    // @ts-ignore
    dispatch({ id: data._id, type: "ASSET_IMAGE_UPDATED", assetURL: jpg });
  };

  return (
    <AssetWrapper>
      {state.reorderable === false && (
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
      )}
      {state.reorderable === true && (
        <ReOrderContainer>
          <ReOrderImage>
            <Image src={image.jpg} alt={""} layout="fill" />
          </ReOrderImage>
          <ReOrderText>{data.title}</ReOrderText>
        </ReOrderContainer>
      )}
    </AssetWrapper>
  );
};

const AssetWrapper = styled.article`
  padding: 2rem 1rem;
  margin-block-end: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const Wrapper = styled.div`
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

const ReOrderContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ReOrderImage = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  object-fit: contain;

  & > img {
    object-fit: contain;
    position: relative;
    opacity: 1;
  }
`;

const ReOrderText = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--color-offblack);
`;

export default Asset;
