/*
This file creates the context API and the reducer function for providing data and state to the Collection Page and related Assets on the Admin Dashboard.
*/
import { createContext, useContext, useReducer } from "react";
import {
  updateCollectionData,
  postCollectionData,
} from "@/hooks/useCollectionsData";
import { updateAssetData, postAssetData } from "@/hooks/useAssetData";
import { CollectionState, AssetData, CollectionData } from "@/types/apiTypes";

const CollectionDataContext = createContext(null);
const CollectionDispatchContext = createContext(null);
const CollectionUpdate = createContext(null);
const CollectionPost = createContext(null);
const AssetDataContext = createContext(null);
const AssetDispatchContext = createContext(null);
const AssetUpdate = createContext(null);
const AssetPost = createContext(null);

export function CollectionProvider({ children }) {
  const [state, dispatch] = useReducer(collectionReducer, initialState);

  return (
    <CollectionDataContext.Provider value={state}>
      <CollectionDispatchContext.Provider value={dispatch}>
        <CollectionUpdate.Provider value={updateCollectionData}>
          <CollectionPost.Provider value={postCollectionData}>
            <AssetUpdate.Provider value={updateAssetData}>
              <AssetPost.Provider value={postAssetData}>
                {children}
              </AssetPost.Provider>
            </AssetUpdate.Provider>
          </CollectionPost.Provider>
        </CollectionUpdate.Provider>
      </CollectionDispatchContext.Provider>
    </CollectionDataContext.Provider>
  );
}

interface useCollectionState {
  (): CollectionState;
}
export const useCollectionState: useCollectionState = () => {
  return useContext(CollectionDataContext);
};

export function useCollectionDispatch() {
  return useContext(CollectionDispatchContext);
}

export function useCollectionUpdate() {
  return useContext(CollectionUpdate);
}

export function useCollectionPost() {
  return useContext(CollectionPost);
}

export function useAssetState() {
  return useContext(AssetDataContext);
}

export function useAssetDispatch() {
  return useContext(AssetDispatchContext);
}

export function useAssetUpdate() {
  return useContext(AssetUpdate);
}

export function useAssetPost() {
  return useContext(AssetPost);
}

interface CollectionAction {
  type: string;
  collection: any;
  id: string;
  assetSort: string[];
  assets: any;
  asset: AssetData;
  assetURL: string;
}

function collectionReducer(state: CollectionState, action: CollectionAction) {
  switch (action.type) {
    case "UPDATED_COLLECTION_FROM_API":
      return {
        ...state,
        collection: action.collection,
      };
    case "UPDATED_ASSET_SORT_FROM_API":
      return {
        ...state,
        assetSort: action.assetSort,
      };
    case "UPDATED_ASSETS_FROM_API":
      return {
        ...state,
        assets: action.assets,
      };
    case "DELETED_COLLECTION":
      return {
        ...state,
        // @ts-ignore
        collection: state.collection.filter(
          (collection: CollectionData) => collection._id !== action.id
        ),
      };
    case "DELETED_ASSET":
      return {
        ...state,
        assets: state.assets.filter((asset) => asset._id !== action.id),
      };
    case "ADDED_COLLECTION":
      return {
        ...state,
        // @ts-ignore
        collection: [...state.collection, action.collection],
      };
    case "ADDED_ASSET":
      return {
        ...state,
        assets: [...state.assets, action.asset],
        assetSort: [...state.assetSort, action.asset._id],
      };
    case "UPDATED_COLLECTION":
      return {
        ...state,
        collection: {
          ...state.collection,
          ...action,
        },
      };
    case "UPDATED_ASSET":
      return {
        ...state,
        assets: state.assets.map((asset) => {
          if (asset._id === action.id) {
            return {
              ...asset,
              ...action,
            };
          }
          return asset;
        }),
      };
    case "REMOVE_ASSET_IMAGE_FROM_VIEW":
      return {
        ...state,
        assets: state.assets.map((asset) => {
          if (asset._id === action.id) {
            return {
              ...asset,
              assetURL: null,
            };
          }
          return asset;
        }),
      };
    case "ASSET_IMAGE_UPDATED":
      return {
        ...state,
        assets: state.assets.map((asset) => {
          if (asset._id === action.id) {
            return {
              ...asset,
              assetURL: action.assetURL,
            };
          }
          return asset;
        }),
      };
    case "TOGGLED_ADD_ASSET_FORM":
      return {
        ...state,
        addAsset: {
          ...state.addAsset,
          showForm: !state.addAsset.showForm,
        },
      };
    case "UPDATED_ADD_ASSET_FORM":
      return {
        ...state,
        addAsset: {
          ...state.addAsset,
          ...action,
        },
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const initialState: CollectionState = {
  collection: {},
  assetSort: [],
  assets: [],
  addAsset: {
    title: "",
    showForm: false,
  },
};
