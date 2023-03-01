import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// API
import {
  useCollectionsData,
  useCollectionSortData,
  updateCollectionSort,
} from "@/hooks/useCollectionsData";

import { sortCollections } from "@/utils/helpers/sortCollections";

const CollectionsLinks = () => {
  const [collectionOrder, setCollectionOrder] = useState([]);
  const { collections, isLoading, isError } = useCollectionsData();
  const {
    collectionSort,
    isLoading: sortLoading,
    isError: sortError,
  } = useCollectionSortData();

  // set collection order from db
  useEffect(() => {
    if (collectionSort && collectionSort.data.length) {
      setCollectionOrder(collectionSort.data[0].collections);
    }
  }, [collectionSort]);

  if (isLoading || sortLoading) return <div>Loading...</div>;
  if (isError || sortError)
    return <div>An error occured, please try again.</div>;

  if (!collectionSort || !collections || !collectionSort.data.length) {
    return <div>No collections</div>;
  }

  // Sorting collections by order from state
  const sortedCollections = sortCollections(collections, collectionOrder);

  // check if any items in sortedCollections are undefined and remove them
  const filteredCollections = sortedCollections.filter(
    (collection) => collection !== undefined
  );

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(collectionOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // set new order in state
    setCollectionOrder(items);

    // update db
    const id = collectionSort.data[0]._id;
    const data = { collections: items };
    try {
      updateCollectionSort(id, data);
    } catch (error) {
      console.log(error);
    }

    // remove background color
    const dragContainer = document.getElementById(
      "sidebar-collection-container"
    );
    if (dragContainer) {
      dragContainer.style.backgroundColor = "revert";
      dragContainer.style.transition = "background-color 0.2s ease-in-out";
    }
  };

  const handleOnDragStart = () => {
    const dragContainer = document.getElementById(
      "sidebar-collection-container"
    );
    if (!dragContainer) return;
    dragContainer.style.backgroundColor = "hsl(0deg 0% 90%)";
    dragContainer.style.transition = "background-color 0.2s ease-in-out";
  };

  return (
    <Wrapper>
      <Title>Collections</Title>
      <DragDropContext
        onDragEnd={handleOnDragEnd}
        onDragStart={handleOnDragStart}
      >
        <nav>
          <Droppable droppableId="assets">
            {(provided) => (
              <List
                role="list"
                ref={provided.innerRef}
                {...provided.droppableProps}
                id="sidebar-collection-container"
              >
                {filteredCollections.map((collection, index) => (
                  <Draggable
                    key={collection._id}
                    draggableId={collection._id}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <StyledLink
                          href={`/admin/collection/${collection._id}`}
                          role="link"
                        >
                          {collection.name}
                        </StyledLink>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </List>
            )}
          </Droppable>
        </nav>
      </DragDropContext>
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
  border-radius: 4px;

  li {
    /* height: 35px; */
    display: flex;
    align-items: center;
    padding-block-start: 0.35rem;
    padding-block-end: 0.3rem;
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-offblack);

  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;

export default CollectionsLinks;
