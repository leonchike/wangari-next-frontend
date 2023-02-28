import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// State and API
import {
  useCollectionState,
  useCollectionDispatch,
} from "@/context/adminCollectionContext";
// Helpers
import { sortAssets } from "@/utils/helpers/collectionHelpers";
// Components
import Asset from "@/components/DashCollectionComponents/Asset";
// types
import { CollectionState, AssetData } from "@/types/apiTypes";

const Assets = () => {
  const state: CollectionState = useCollectionState();
  const dispatch = useCollectionDispatch();

  const assets = state.assets;
  const sortOrder = state.assetSort;

  if (!assets) {
    return <div>No Works Found</div>;
  }

  if (assets.length === 0) {
    return <NoAssets>This collection does not have any works.</NoAssets>;
  }

  // @ts-ignore
  const sortedAssets: AssetData[] = sortAssets(sortOrder, assets);

  // Check if sortedAssets is empty or has undefined values in each array
  // @ts-ignore
  if (sortedAssets.length === 0 || sortedAssets.includes(undefined)) {
    return <div>Loading...</div>;
  }

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(sortOrder);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    // @ts-ignore
    dispatch({ type: "UPDATED_ASSET_SORT", assetSort: items });
  }

  return (
    <Wrapper>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="assets">
          {(provided: any) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {sortedAssets.map((asset, index) => (
                <Draggable
                  key={asset._id}
                  draggableId={asset._id}
                  index={index}
                  isDragDisabled={!state.reorderable}
                >
                  {(provided: any) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Asset key={asset._id} data={asset} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-block-start: 1rem;
`;

const NoAssets = styled.div`
  margin-block-start: 1.5rem;
`;

export default Assets;
