import useSWR from "swr";
import { Get, Put, Post } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";
import { PressData } from "@/types/apiTypes";

export const GetPressData = async (url: string) => {
  // @ts-ignore
  const response = await Get({ endpoint: url });
  return response.data;
};

export const usePressData = () => {
  const { data, error, isLoading } = useSWR(API_Routes.press, GetPressData);
  return {
    pressData: data,
    isLoading,
    error,
  };
};

export const updatePressData = async (id: string, data: PressData) => {
  const response = await Put({ endpoint: API_Routes.press, id, data });
  return response.data;
};

// Post new CV data
export const postPressData = async (data: PressData) => {
  // @ts-ignore
  const response = await Post({ endpoint: API_Routes.press, data });
  return response.data;
};
