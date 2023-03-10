import useSWR from "swr";
import { Get, Put } from "@/utils/Api/admin/securedAPI";
import API_Routes from "@/utils/Api/APIRoutes";
import { DataOrderData } from "@/types/apiTypes";

export const GetOrderData = async (url: string) => {
  // @ts-ignore
  const response = await Get({ endpoint: url });
  return response.data;
};

export const useDataOrder = () => {
  const { data, error, isLoading } = useSWR(API_Routes.dataOrder, GetOrderData);
  return {
    dataOrder: data,
    isLoading,
    error,
  };
};
