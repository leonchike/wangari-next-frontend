import useSWR from "swr";
import { Get, Put } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";
import { UserData, UpdatePasswordRequest } from "@/types/apiTypes";

export const GetUserData = async (url: string) => {
  // @ts-ignore
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

export const updateUserData = async (data: UserData) => {
  // @ts-ignore
  const response = await Put({ endpoint: API_Routes.updateCurrentUser, data });
  return response.data;
};

export const updatePassword = async (data: UpdatePasswordRequest) => {
  // @ts-ignore
  const response = await Put({ endpoint: API_Routes.updatePassword, data });
  return response.data;
};
