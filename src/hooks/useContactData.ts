import useSWR from "swr";
// @ts-ignore
import { Get, Put } from "@/utils/Api/admin/securedAPI";
// @ts-ignore
import API_Routes from "@/utils/Api/APIRoutes";
// @ts-ignore
import { ContactData } from "@/types/apiTypes";

export const GetContactData = async (url: string) => {
  // @ts-ignore
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

export const updateContactData = async (id: string, data: ContactData) => {
  const response = await Put({ endpoint: API_Routes.contact, id, data });
  return response.data;
};
``;
