import { useRouter } from "next/router";
import { useQuery } from "react-query";
import styled, { keyframes } from "styled-components";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import PublicLayout from "@/components/layouts/PublicLayout";
import GalleryAsset from "@/components/GalleryAsset";
import { getCollectionData } from "@/api/public/publicAPI";
import { QUERIES } from "@/styles/styleConstants";
import { fadeIn } from "@/styles/animations";

const Collections = () => {
  const router = useRouter();
  const id = router.query.id;

  const { data, isLoading, isError } = useQuery(
    ["collection", id],
    getCollectionData
  );

  const details = data?.data?.data;

  if (isError) {
    return (
      <div>
        Could not load the page content. Please refresh the page to try again.
      </div>
    );
  }

  return (
    <PageWrapper>
      <HeadingSection>
        <Title>
          {isLoading ? (
            <TitleSkeletonWrapper>
              <Skeleton height={40} />
            </TitleSkeletonWrapper>
          ) : (
            details.name
          )}
        </Title>

        <Abstract>
          {isLoading ? (
            <AbstractTitleSkeletonWrapper>
              <Skeleton count={4} height={30} />
            </AbstractTitleSkeletonWrapper>
          ) : (
            details.notes
          )}
        </Abstract>
      </HeadingSection>
      <PageDivider />
      <ImageSection>
        <MasonryGrid>
          {isLoading ? (
            <div></div>
          ) : (
            details.assetSort.map((asset) => (
              <GalleryAsset id={asset} key={asset} />
            ))
          )}
        </MasonryGrid>
      </ImageSection>
    </PageWrapper>
  );
};

Collections.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

const PageWrapper = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  padding-inline-start: 1rem;
  padding-inline-end: 1rem;
  padding-block-start: 1rem;
  padding-block-end: 4rem;

  @media ${QUERIES.tabletAndUp} {
    padding-block-start: calc(37 / 16 * 1rem);
  }
`;

const HeadingSection = styled.section`
  animation: ${fadeIn} 2s both;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--color-offblack);
`;

const Abstract = styled.p`
  font-size: 1.1rem;
  color: var(--color-offblack);
  line-height: 1.75;
  max-width: 600px;
  padding-block-start: 30px;
  padding-block-end: 40px;
`;

const TitleSkeletonWrapper = styled.div`
  width: 200px;
  max-width: 200px;
  opacity: 0;
`;

const AbstractTitleSkeletonWrapper = styled.div`
  max-width: 600px;
  opacity: 0;
`;

const PageDivider = styled.div`
  width: 50px;
  border-top: 2px solid var(--color-gray-900);
`;

const ImageSection = styled.section`
  margin-block-start: 40px;
`;

function createCSSMasonryLoop() {
  let css = "";

  for (let i = 1; i <= 36; i++) {
    const height = Math.floor(Math.random() * 400) + 100;
    css += `
      .masonry-with-columns:nth-child(${i}) {
        height: ${height}px;
        line-height: ${height}px;
      }
    `;
  }

  return css;
}

const MasonryGrid = styled.div`
  columns: 4 400px;
  column-gap: var(--masonry-spacing);

  ${createCSSMasonryLoop()}

  & a {
    pointer-events: none;
  }

  @media (max-width: ${QUERIES.tabletAndUp}) {
    & a {
      pointer-events: auto;
    }
  }
`;

export default Collections;