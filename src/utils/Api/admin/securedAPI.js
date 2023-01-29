// This file will absctract the authenticated API calls to the backend
import axios from "axios";
import API_Routes from "@/utils/Api/APIRoutes";

//get user from local storage
const getAuthDataFromLocalStorage = () => {
  // check if local storage is available
  if (typeof window === "undefined") {
    return null;
  }
  const token = localStorage.getItem("token");
  if (token) {
    return token;
  }
  return null;
};

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const ApiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: "Bearer " + getAuthDataFromLocalStorage(),
  },
});

export const Get = async ({ endpoint, id }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }

  const response = await ApiClient.get(endpoint);
  return response;
};

export const Post = async ({ endpoint, id, data }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }
  const response = await ApiClient.post(endpoint, data);
  return response;
};

export const Put = async ({ endpoint, id, data }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }
  const response = await ApiClient.put(endpoint, data);
  return response;
};

export const Delete = async ({ endpoint, id }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }
  const response = await ApiClient.delete(endpoint);
  return response;
};

export default ApiClient;
