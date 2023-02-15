import axios from "axios";
import { LoginRequest, LoginResponse } from "@/types/apiTypes";

import API_Routes from "@/utils/Api/APIRoutes";

export const loginAPI = async (data: LoginRequest):Promise<LoginResponse> => {
  return await axios.post(API_Routes.LOGINROUTE, data);
};
