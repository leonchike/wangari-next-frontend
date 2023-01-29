import Link from "next/link";
import styled from "styled-components";

// API
import {
  useCollectionsData,
  useCollectionSortData,
} from "@/hooks/useCollectionsData";

import { sortCollections } from "@/utils/helpers/sortCollections";

const CollectionsLinks = () => {
  const { collections, isLoading, isError } = useCollectionsData();
  const {
    collectionSort,
    isLoading: sortLoading,
    isError: sortError,
  } = useCollectionSortData();

  if (isLoading || sortLoading) return <div>Loading...</div>;
  if (isError || sortError) return <div>Error...</div>;

  if (!collectionSort || !collections) {
    return <div>No collections</div>;
  }
  // Extracting nesting data
  const order = collectionSort.data[0].collections;

  // Sorting collections by order from db
  const sortedCollections = sortCollections(collections, order);

  return (
    <Wrapper>
      <Title>Collections</Title>
      <nav>
        <List role="list">
          {sortedCollections.map((collection) => (
            <li key={collection._id}>
              <StyledLink
                href={`/admin/collection/${collection._id}`}
                role="link"
              >
                {collection.name}
              </StyledLink>
            </li>
          ))}
        </List>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: var(--font-weight-normal);
  color: var(--color-gray-700);
`;

const List = styled.ul`
  margin-block-start: 0.3rem;
  margin-block-end: clamp(1.5rem, 10vh, 3rem);

  li {
    height: 30px;
    display: flex;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-offblack);
  padding-block-start: 0.15rem;
  padding-block-end: 0.15rem;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;

export default CollectionsLinks;
