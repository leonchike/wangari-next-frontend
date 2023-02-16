import useSWR from "swr";
import { Get, Post, Put } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";
import { AssetData } from "@/types/apiTypes";

interface GetAssetData {
  (url: string): Promise<AssetData>;
}

export const GetAssetData: GetAssetData = async (url: string) => {
  // @ts-ignore
  const response = await Get({ endpoint: url });
  return response.data;
};

// type ReturnedData = {
//   data: AssetData[];
// };

// interface UseAssetData {
//   (): {
//     assets: ReturnedData;
//     isLoading: boolean;
//     error: any;
//   };
// }

export const useAssetData = () => {
  const { data, error, isLoading } = useSWR(API_Routes.asset, GetAssetData);
  return {
    assets: data,
    isLoading,
    error,
  };
};

interface updateAssetData {
  (id: string, data: AssetData): Promise<AssetData>;
}

export const updateAssetData: updateAssetData = async (id, data) => {
  const response = await Put({ endpoint: API_Routes.asset, id, data });
  return response.data;
};

// Post new Asset data
interface postAssetData {
  (data: AssetData): Promise<AssetData>;
}

export const postAssetData: postAssetData = async (data: AssetData) => {
  // @ts-ignore
  const response = await Post({ endpoint: API_Routes.asset, data });
  return response.data;
};
