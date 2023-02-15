import { Get } from "@/utils/Api/admin/securedAPI";

export const GetCollectionsData = async () => {
  // @ts-ignore
  const response = await Get({ endpoint: "collections" });
  return response.data;
};
