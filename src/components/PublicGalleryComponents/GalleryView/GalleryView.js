import Image from "next/image";
import styled from "styled-components";

import { QUERIES } from "@/styles/styleConstants";
import inTOcm from "@/utils/convertInchesToCentimeters";
import { fadeIn } from "@/styles/animations";

const GalleryView = ({ id, assetData }) => {
  let WindowHeight = typeof window !== "undefined" && window.innerHeight;

  return (
    <Wrapper WindowHeight={WindowHeight}>
      <ImageWrapper>
        <Picture className="gallery-image">
          <source
            srcSet={assetData?.WebPOriginalSizePublicURL}
            type="image/webp"
          />
          <source srcSet={assetData?.assetURL} type="image/jpeg" />
          <StyledImage src={assetData?.assetURL} alt={assetData?.title} />
        </Picture>
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
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;

  @media ${QUERIES.laptopAndUp} {
    padding: 1rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: grid;
  place-content: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const TextWrapper = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: flex-end;

  @media ${QUERIES.laptopAndUp} {
    width: 250px;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  height: auto;
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;

  transition: opacity 0.5s ease-in-out;
`;

const Picture = styled.picture`
  overflow: hidden;

  img {
    object-fit: contain;
  }
`;

const Placard = styled.div`
  max-width: 250px;

  @media ${QUERIES.laptopAndUp} {
    max-width: 350px;
  }
`;

const Title = styled.h1`
  font-size: 1rem;
  font-weight: 600;
  margin-block-end: 6px;
  color: var(--color-offblack);
  animation: ${fadeIn} 1.5s ease-in-out;

  @media ${QUERIES.laptopAndUp} {
    font-size: 1.2rem;
    margin-block-end: 10px;
  }
`;

const Story = styled.p`
  font-size: 0.9rem;
  margin-block-end: 1rem;
  color: var(--color-offblack);
  animation: ${fadeIn} 1.65s ease-in-out;

  @media ${QUERIES.laptopAndUp} {
    font-size: 1rem;
    margin-block-end: 1.2rem;
  }
`;

const Medium = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  margin-block-end: 4px;
  color: var(--color-gray-700);
  animation: ${fadeIn} 1.7s ease-in-out;

  @media ${QUERIES.laptopAndUp} {
    font-size: 0.9rem;
    margin-block-end: 6px;
  }
`;

const SIZE = styled.span``;

const Measurements = styled.p`
  font-size: 0.85rem;
  font-weight: 400;
  color: var(--color-gray-700);
  animation: ${fadeIn} 1.7s ease-in-out;
`;

export default GalleryView;
