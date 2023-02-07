import useSWR from "swr";
import { Get, Put } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";

export const GetUserData = async (url) => {
  const response = await Get({ endpoint: url });
  return response.data;
};

export const useUserData = () => {
  const { data, error, isLoading } = useSWR(
    API_Routes.currentUser,
    GetUserData
  );
  return {
    user: data,
    isLoading,
    error,
  };
};

export const updateUserData = async (data) => {
  const response = await Put({ endpoint: API_Routes.updateCurrentUser, data });
  return response.data;
};

export const updatePassword = async (data) => {
  const response = await Put({ endpoint: API_Routes.updatePassword, data });
  return response.data;
};
