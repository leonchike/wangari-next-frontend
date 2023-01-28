import Image from "next/image";
import styled from "styled-components";

import { QUERIES } from "@/styles/styleConstants";
import inTOcm from "@/utils/convertInchesToCentimeters";
import { fadeIn } from "@/styles/animations";

const GalleryView = ({ id, assetData }) => {
  return (
    <Wrapper>
      <Fill />
      <ImageWrapper>
        <picture className="gallery-image">
          <source
            srcSet={assetData?.WebPOriginalSizePublicURL}
            type="image/webp"
          />
          <source srcSet={assetData?.assetURL} type="image/jpeg" />
          <StyledImage src={assetData?.assetURL} alt={assetData?.title} />
        </picture>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  /* animation: ${fadeIn} 0.5s ease-in-out; */

  @media ${QUERIES.laptopAndUp} {
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Fill = styled.div``;

const TextWrapper = styled.div`
  flex: 0;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const StyledImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: auto;
  /* max-width: 600px; */
  max-height: min(70vh, 700px);

  transition: opacity 0.5s ease-in-out;

  @media ${QUERIES.laptopAndUp} {
    max-width: minmax(80vw, 1200px);
    max-height: min(70vh, 800px);
  }

  @media ${QUERIES.desktopAndUp} {
    max-width: minmax(80vw, 1400px);
    max-height: min(70vh, 1900px);
  }
`;

const Placard = styled.div`
  max-width: 250px;
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
