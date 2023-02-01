import useSWR from "swr";
import { Get } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";

export const GetAssetData = async (url) => {
  const response = await Get({ endpoint: url });
  return response.data;
};

export const useAssetData = () => {
  const { data, error, isLoading } = useSWR(API_Routes.asset, GetAssetData);
  return {
    assets: data,
    isLoading,
    error,
  };
};

export const updateAssetData = async (id, data) => {
  const response = await Put({ endpoint: API_Routes.asset, id, data });
  return response.data;
};

// Post new Asset data
export const postAssetData = async (data) => {
  const response = await Post({ endpoint: API_Routes.asset, data });
  return response.data;
};
