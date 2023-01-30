import { Get } from "@/utils/Api/admin/securedAPI";

export const GetCollectionsData = async () => {
  const response = await Get({ endpoint: "collections" });
  return response.data;
};
