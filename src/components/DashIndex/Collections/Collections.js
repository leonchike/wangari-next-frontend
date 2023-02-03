import styled from "styled-components";

import { useDashboardState } from "@/context/adminDashboardContext";
import Tile from "@/components/DashIndex/Tile";
import { QUERIES } from "@/styles/styleConstants";

const Collections = () => {
  const state = useDashboardState();
  const collections = state.collections;
  const collectionSort = state.collectionSort;

  // order collections by collectionSort using the collection _id
  const orderedCollections = collectionSort.map((id) => {
    return collections.find((collection) => collection._id === id);
  });

  return (
    <Wrapper>
      <Title>Collections</Title>
      <Grid>
        {orderedCollections.map((collection) => (
          <Tile key={collection._id} type="collection" data={collection} />
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-block-start: 2rem;
  margin-block-end: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
`;

const Grid = styled.div`
  --min-column-width: min(300px, 100%);
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-block-start: 1rem;
  margin-block-end: 1rem;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--min-column-width), 1fr)
    );
    column-gap: 3rem;
  }
`;

export default Collections;
