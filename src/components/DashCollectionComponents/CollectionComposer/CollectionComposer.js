/*
  This component is the main component for the collection page. It is responsible for fetching the collection data and the asset data to then dispatch it to the reducer to set state.
*/

import { useEffect } from "react";
import { useGetOneCollectionData } from "@/hooks/useCollectionsData";
import { useAssetData } from "@/hooks/useAssetData";

import {
  useCollectionDispatch,
  useCollectionState,
} from "@/context/adminCollectionContext";

//helpers
import { filterAssets } from "@/utils/helpers/collectionHelpers";

//components
import CollectionContent from "@/components/DashCollectionComponents/CollectionContent";

const CollectionComposer = ({ collectionId }) => {
  const state = useCollectionState();
  const dispatch = useCollectionDispatch();
  const { collection, isLoading, error } =
    useGetOneCollectionData(collectionId);

  const { assets, isLoading: assetLoading, error: assetError } = useAssetData();

  useEffect(() => {
    if (collection) {
      dispatch({
        type: "UPDATED_COLLECTION_FROM_API",
        collection: collection.data,
      });
      dispatch({
        type: "UPDATED_ASSET_SORT_FROM_API",
        assetSort: collection.data.assetSort,
      });
    }
  }, [collection, collectionId, dispatch]);

  useEffect(() => {
    if (assets && assets.data) {
      console.log(assets.data);
      const filteredAssets = filterAssets(assets, collectionId);
      dispatch({
        type: "UPDATED_ASSETS_FROM_API",
        assets: filteredAssets,
      });
    }
  }, [assets, collectionId, dispatch]);

  if (isLoading || assetLoading) {
    return <div>Loading...</div>;
  }

  if (error || assetError) {
    return <div>Error...</div>;
  }

  if (!state.collection) {
    return <div>Loading...</div>;
  }

  return <CollectionContent />;
};

export default CollectionComposer;
