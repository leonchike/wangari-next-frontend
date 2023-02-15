// This file will absctract the authenticated API calls to the backend
import axios from "axios";

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

ApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Dispatch an action or perform other logic to log the user out
      console.log("error 401");
      logout();
    }
    console.log(error);
    return error;
    return Promise.reject(error);
  }
);

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

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  // use javascript to redirect the user to the login page
  window.location.href = "/login";
};

export default ApiClient;
