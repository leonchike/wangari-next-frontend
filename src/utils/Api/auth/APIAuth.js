import axios from "axios";

import API_Routes from "@/utils/Api/APIRoutes";

export const loginAPI = async (data) => {
  return await axios.post(API_Routes.LOGINROUTE, data);
};
