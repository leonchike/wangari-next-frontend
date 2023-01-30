import useSWR from "swr";
import { Get, Put } from "@/utils/Api/admin/securedAPI";
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

export const updateContactData = async (id, data) => {
  const response = await Put({ endpoint: API_Routes.contact, id, data });
  return response.data;
};
``;
