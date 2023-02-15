import useSWR from "swr";
import { Get, Put, Post } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";
import { AboutData } from "@/types/apiTypes";

export const GetAboutData = async (url: string) => {
  // @ts-ignore
  const response = await Get({ endpoint: url });
  return response.data;
};

export const useAboutData = () => {
  const { data, error, isLoading } = useSWR(API_Routes.about, GetAboutData);
  return {
    aboutData: data,
    isLoading,
    error,
  };
};

export const updateAboutData = async (
  id: string,
  data: AboutData
): Promise<AboutData> => {
  const response = await Put({ endpoint: API_Routes.about, id, data });
  return response.data;
};
