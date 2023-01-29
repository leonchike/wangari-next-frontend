import useSWR from "swr";
import { Get } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";

export const GetContactData = async (url) => {
  const response = await Get({ endpoint: url });
  return response.data;
};

export const useContactData = () => {
  const { data, error, isLoading } = useSWR(API_Routes.contact, GetContactData);
  return {
    contact: data,
    isLoading,
    error,
  };
};
