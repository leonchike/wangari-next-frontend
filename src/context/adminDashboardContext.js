/*
This file creates the context API and the reducer function for providing data and state to the Dahboard Page on the Admin Dashboard.
*/

import { createContext, useContext, useReducer } from "react";
import {
  useCollectionsData,
  useCollectionSortData,
} from "@/hooks/useCollectionsData";
import { useUserData } from "@/hooks/useUserData";

const DashboardDataContext = createContext(null);
const DashboardDispatchContext = createContext(null);
const DashboardCollections = createContext(null);
const DashboardCollectionSort = createContext(null);
const DashboardUser = createContext(null);

export function DashboardProvider({ children }) {
  const [state, dispatch] = useReducer(dashboardReducer, initialState);

  return (
    <DashboardDataContext.Provider value={state}>
      <DashboardDispatchContext.Provider value={dispatch}>
        <DashboardCollections.Provider value={useCollectionsData}>
          <DashboardCollectionSort.Provider value={useCollectionSortData}>
            <DashboardUser.Provider value={useUserData}>
              {children}
            </DashboardUser.Provider>
          </DashboardCollectionSort.Provider>
        </DashboardCollections.Provider>
      </DashboardDispatchContext.Provider>
    </DashboardDataContext.Provider>
  );
}

export function useDashboardState() {
  return useContext(DashboardDataContext);
}

export function useDashboardDispatch() {
  return useContext(DashboardDispatchContext);
}

export function useDashboardCollections() {
  return useContext(DashboardCollections);
}

export function useDashboardCollectionSort() {
  return useContext(DashboardCollectionSort);
}

export function useDashboardUser() {
  return useContext(DashboardUser);
}

// reducer function for the Dashboard Page
function dashboardReducer(state, action) {
  switch (action.type) {
    case "SET_COLLECTIONS":
      return {
        ...state,
        collections: action.collections,
      };
    case "SET_COLLECTION_SORT":
      return {
        ...state,
        collectionSort: action.collectionSort,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// initial state for the Dashboard Page
const initialState = {
  collections: [],
  collectionSort: [],
  user: {},
};
