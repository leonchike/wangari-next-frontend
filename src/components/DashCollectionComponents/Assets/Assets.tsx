import styled from "styled-components";
// State and API
import { useCollectionState } from "@/context/adminCollectionContext";
// Helpers
import { sortAssets } from "@/utils/helpers/collectionHelpers";
// Components
import Asset from "@/components/DashCollectionComponents/Asset";
// types
import { CollectionState, AssetData } from "@/types/apiTypes";

const Assets = () => {
  const state: CollectionState = useCollectionState();

  const assets = state.assets;
  const sortOrder = state.assetSort;

  if (!assets) {
    return <div>No Works Found</div>;
  }

  if (assets.length === 0) {
    return <NoAssets>This collection does not have any works.</NoAssets>;
  }

  const sortedAssets: AssetData[] = sortAssets(sortOrder, assets);

  // Check if sortedAssets is empty or has undefined values in each array
  // @ts-ignore
  if (sortedAssets.length === 0 || sortedAssets.includes(undefined)) {
    return <div>Loading...</div>;
  }

  return (
    <Wrapper>
      {sortedAssets.map((asset) => (
        <Asset key={asset._id} data={asset} />
      ))}
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
