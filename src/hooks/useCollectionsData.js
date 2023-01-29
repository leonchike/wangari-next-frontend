import useSWR from "swr";
import { Get } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";

export const GetCollectionsData = async (url) => {
  const response = await Get({ endpoint: url });
  return response.data;
};

export const useCollectionsData = () => {
  const { data, error, isLoading } = useSWR(
    API_Routes.collection,
    GetCollectionsData
  );
  return {
    collections: data,
    isLoading,
    error,
  };
};

export const useCollectionSortData = () => {
  const { data, error, isLoading } = useSWR(
    API_Routes.collectionSort,
    GetCollectionsData
  );
  return {
    collectionSort: data,
    isLoading,
    error,
  };
};
