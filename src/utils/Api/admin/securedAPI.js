// This file will absctract the authenticated API calls to the backend
import axios from "axios";
import { GetRoute } from "@/utils/Api/APIRoutes";

//get user from local storage
const getAuthDataFromLocalStorage = () => {
  // check if local storage is available
  if (typeof window === "undefined") {
    return null;
  }
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  if (storedUser && storedToken) {
    return {
      user: storedUser,
      token: storedToken,
    };
  }
  return null;
};

const ApiClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + getAuthDataFromLocalStorage().token,
  },
});

export const Get = async ({ endpoint, id }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }
  const response = await ApiClient.get(GetRoute(endpoint));
  return response;
};

export const Post = async ({ endpoint, id, data }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }
  const response = await ApiClient.post(GetRoute(endpoint), data);
  return response;
};

export const Put = async ({ endpoint, id, data }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }
  const response = await ApiClient.put(GetRoute(endpoint), data);
  return response;
};

export const Delete = async ({ endpoint, id }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }
  const response = await ApiClient.delete(GetRoute(endpoint));
  return response;
};

export default ApiClient;
