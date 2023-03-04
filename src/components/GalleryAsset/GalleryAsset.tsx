import Link from "next/link";
import styled from "styled-components";
import { useQuery } from "react-query";

import { getAssetData } from "@/api/public/publicAPI";
import inTOcm from "@/utils/convertInchesToCentimeters";
import { QUERIES } from "@/styles/styleConstants";

import { AssetData } from "@/types/apiTypes";

const GalleryAsset = ({ id }) => {
  const assetQuery = useQuery(["asset", id], getAssetData);

  if (assetQuery.isLoading) {
    return null;
  }

  const data: AssetData = assetQuery.data.data.data;

  return (
    <StyledLink href={`/art/gallery/${id}`} role="link" id={id}>
      <AssetWrapper className="gallery-asset masonry-item">
        <picture>
          <source srcSet={data.WebP500wPublicURL} type="image/webp" />
          <source srcSet={data.assetURL} type="image/jpeg" />
          <Asset src={data.assetURL} alt={data?.title} />
        </picture>

        <MobileDetails className="gallery-asset-info">
          <Title className="gallery-asset-info-title">{data?.title}</Title>
          <Story className="gallery-asset-info-story">{data?.story}</Story>
          <Medium className="gallery-asset-info-medium">{data?.medium}</Medium>
          <SIZE className="gallery-asset-info-size">
            <span>{data?.widthInInches}</span> x{" "}
            <span>{data?.heightInInches}</span> in (
            <span>{inTOcm(data?.widthInInches)}</span> x{" "}
            <span>{inTOcm(data?.heightInInches)}</span> cm)
          </SIZE>
        </MobileDetails>
      </AssetWrapper>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  pointer-events: none;
  cursor: not-allowed;

  @media ${QUERIES.tabletAndUp} {
    pointer-events: revert;
    cursor: revert;
  }
`;

const AssetWrapper = styled.article`
  width: 100%;
  margin-block-end: var(--masonry-spacing);
`;

const Asset = styled.img`
  width: 100%;
  height: auto;
`;

const MobileDetails = styled.div`
  padding-block-end: 2rem;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Title = styled.h3`
  font-size: 0.95em;
  padding-block-start: 5px;
  padding-block-end: 5px;
  color: var(--color-offblack);
  text-decoration: revert;
`;

const Story = styled.p`
  font-size: 0.85em;
  padding-block-end: 10px;
  color: var(--color-offblack);
`;

const Medium = styled.p`
  font-size: 0.85em;
  color: var(--color-offblack);
`;

const SIZE = styled.p`
  font-size: 0.85em;
  color: var(--color-offblack);
`;

export default GalleryAsset;
