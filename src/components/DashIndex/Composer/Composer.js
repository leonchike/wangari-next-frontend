/* 
  This component is responsible for fetching the collections data, collection sort data and current user data to then dispatch it to the reducer to set state.
*/

import { useEffect } from "react";
import {
  useCollectionsData,
  useCollectionSortData,
} from "@/hooks/useCollectionsData";
import { useUserData } from "@/hooks/useUserData";
import { useDashboardDispatch } from "@/context/adminDashboardContext";

//components
import Header from "@/components/DashIndex/Header";
import Collections from "@/components/DashIndex/Collections";
import Pages from "@/components/DashIndex/Pages";

const CollectionsComposer = () => {
  const dispatch = useDashboardDispatch();
  const { collections, isLoading, error } = useCollectionsData();
  const {
    collectionSort,
    isLoading: sortLoading,
    error: sortError,
  } = useCollectionSortData();
  const { user, isLoading: userLoading, error: userError } = useUserData();

  useEffect(() => {
    if (collections) {
      dispatch({
        type: "SET_COLLECTIONS",
        collections: collections.data,
      });
    }
  }, [collections, dispatch]);

  useEffect(() => {
    if (collectionSort) {
      dispatch({
        type: "SET_COLLECTION_SORT",
        collectionSort: collectionSort.data[0].collections,
      });
    }
  }, [collectionSort, dispatch]);

  useEffect(() => {
    if (user) {
      dispatch({
        type: "SET_USER",
        user: user.data,
      });
    }
  }, [user, dispatch]);

  if (isLoading || sortLoading || userLoading) {
    return <div>Loading...</div>;
  }

  if (error || sortError || userError) {
    return <div>Error...</div>;
  }

  // console.log(user);

  return (
    <div>
      <Header />
      <Collections />
      <Pages />
    </div>
  );
};

export default CollectionsComposer;
