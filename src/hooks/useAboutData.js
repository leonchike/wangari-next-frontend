import useSWR from "swr";
import { Get, Put, Post } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";

export const GetAboutData = async (url) => {
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

export const updateAboutData = async (id, data) => {
  const response = await Put({ endpoint: API_Routes.about, id, data });
  return response.data;
};
