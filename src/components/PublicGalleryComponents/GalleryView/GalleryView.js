import Image from "next/image";
import styled from "styled-components";

import { QUERIES } from "@/styles/styleConstants";
import inTOcm from "@/utils/convertInchesToCentimeters";
import { fadeIn } from "@/styles/animations";

const GalleryView = ({ id, assetData }) => {
  console.log(assetData);

  return (
    <Wrapper>
      <ImageWrapper>
        <div>
          <picture className="gallery-image">
            <source
              srcSet={assetData?.WebPOriginalSizePublicURL}
              type="image/webp"
            />
            <source srcSet={assetData?.assetURL} type="image/jpeg" />
            <StyledImage src={assetData?.assetURL} alt={assetData?.title} />
          </picture>
        </div>
      </ImageWrapper>
      <TextWrapper>
        <Placard>
          <Title>{assetData.title}</Title>
          <Story>{assetData.story}</Story>
          <div>
            <Medium>{assetData.medium && assetData.medium}</Medium>
            <Measurements>
              <span>
                {assetData.widthInInches && (
                  <SIZE>{assetData.widthInInches}</SIZE>
                )}
              </span>{" "}
              x{" "}
              <span>
                {assetData.heightInInches && (
                  <SIZE>{assetData.heightInInches}</SIZE>
                )}
              </span>{" "}
              in (
              <span>
                {assetData.widthInInches && (
                  <SIZE>{inTOcm(assetData.widthInInches)}</SIZE>
                )}{" "}
                x{" "}
              </span>
              <span>
                {assetData.heightInInches && (
                  <SIZE>{inTOcm(assetData.heightInInches)}</SIZE>
                )}
              </span>{" "}
              cm)
            </Measurements>
          </div>
        </Placard>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1.5rem 3fr 1fr 1fr 1fr 1fr 3fr 1.5rem;
  grid-auto-rows: 1fr min-content;
  grid-template-areas:
    ". image image image image image image ."
    ". . . . . . text .";

  overflow-y: scroll;

  animation: ${fadeIn} 0.5s ease-in-out;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: minmax(250px, 1fr) auto minmax(250px, 1fr);
    grid-template-areas:
      ". image ."
      ". . text";
  }
`;

const ImageWrapper = styled.div`
  grid-area: image;
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
`;

const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 70vh;

  @media ${QUERIES.laptopAndUp} {
    max-height: calc(100vh - 15rem);
  }
`;

const TextWrapper = styled.div`
  grid-area: text;
  align-self: flex-end;
  position: relative;
  width: 100%;
`;

const Placard = styled.div`
  @media ${QUERIES.laptopAndUp} {
    position: absolute;
    bottom: 0;
    left: clamp(1rem, 5vw, 3rem);
    width: calc(100% - clamp(1rem, 5vw, 3rem));
  }
`;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: var(--color-offblack);
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const Story = styled.p`
  margin-bottom: 20px;
  animation: ${fadeIn} 1.65s ease-in-out;
`;

const Medium = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 5px;
  color: var(--color-gray-700);
  animation: ${fadeIn} 1.7s ease-in-out;
`;

const SIZE = styled.span``;

const Measurements = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: var(--color-gray-700);
  animation: ${fadeIn} 1.7s ease-in-out;
`;

export default GalleryView;
