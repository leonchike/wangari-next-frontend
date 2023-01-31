import useSWR from "swr";
import { Get, Put, Post } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";

export const GetCVData = async (url) => {
  const response = await Get({ endpoint: url });
  return response.data;
};

export const useCVData = () => {
  const { data, error, isLoading } = useSWR(API_Routes.cv, GetCVData);
  return {
    cvData: data,
    isLoading,
    error,
  };
};

export const updateCVData = async (id, data) => {
  const response = await Put({ endpoint: API_Routes.cv, id, data });
  return response.data;
};

// Post new CV data
export const postCVData = async (data) => {
  const response = await Post({ endpoint: API_Routes.cv, data });
  return response.data;
};
