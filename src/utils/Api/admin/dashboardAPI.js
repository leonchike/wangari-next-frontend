import { Get } from "@/utils/Api/admin/securedAPI";
import { GetRoute } from "@/utils/Api/APIRoutes";

export const GetCollectionsData = async () => {
  const response = await Get({ endpoint: "collections" });
  return response.data;
};
