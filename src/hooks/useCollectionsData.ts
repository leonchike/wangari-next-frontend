import useSWR from "swr";
import { Get, Put, Post } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";
import { CollectionData } from "@/types/apiTypes";

export const GetCollectionsData = async (url: string) => {
  // @ts-ignore
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

interface useGetOneCollectionData {
  (id: string): {
    collection: {
      data: CollectionData;
    };
    isLoading: boolean;
    error: any;
  };
}

export const useGetOneCollectionData: useGetOneCollectionData = (
  id: string
) => {
  const { data, error, isLoading } = useSWR(
    `${API_Routes.collection}/${id}`,
    GetCollectionsData
  );
  return {
    collection: data,
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

export const updateCollectionData = async (
  id: string,
  data: CollectionData
) => {
  const response = await Put({ endpoint: API_Routes.collection, id, data });
  return response.data;
};

// Post new collection data
export const postCollectionData = async (data: CollectionData) => {
  // @ts-ignore
  const response = await Post({ endpoint: API_Routes.collection, data });
  return response.data;
};
