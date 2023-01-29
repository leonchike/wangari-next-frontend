// This file will absctract the authenticated API calls to the backend
import axios from "axios";
import { logout } from "@/hooks/use-auth";

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

// checks if 401 is returned from the API and logs the user out
const handle401 = (response) => {
  if (response.status === 401) {
    logout();
  }
};

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
  handle401(response);
  return response;
};

export const Post = async ({ endpoint, id, data }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }
  const response = await ApiClient.post(endpoint, data);
  handle401(response);
  return response;
};

export const Put = async ({ endpoint, id, data }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }
  const response = await ApiClient.put(endpoint, data);
  handle401(response);
  return response;
};

export const Delete = async ({ endpoint, id }) => {
  if (id) {
    endpoint = endpoint + "/" + id;
  }
  const response = await ApiClient.delete(endpoint);
  handle401(response);
  return response;
};

export default ApiClient;
