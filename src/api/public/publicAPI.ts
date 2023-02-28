import axios from "axios";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

export const getAboutData = async () => {
  const response = await axios.get(`${BASE_API_URL}/public-api/about`);
  return response.data;
};

export const getCVData = async () => {
  const response = await axios.get(`${BASE_API_URL}/public-api/cv`);
  return response.data;
};

export const getPressData = async () => {
  const response = await axios.get(`${BASE_API_URL}/public-api/press`);
  return response;
};

export const submitContactform = async ({
  firstName,
  lastName,
  email,
  subject,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const response = await axios.post(
    `${BASE_API_URL}/public-api/submitcontact`,
    {
      firstName,
      lastName,
      email,
      subject,
      message,
    }
  );
  return response;
};

// get collection data
export const getAllCollectionData = async () => {
  const response = await axios.get(`${BASE_API_URL}/public-api/collections/`);
  return response;
};

//get collection sort dataOrder
export const getCollectionSort = async () => {
  const response = await axios.get(
    `${BASE_API_URL}/public-api/collections/order`
  );
  return response;
};

// get collection data
export const getCollectionData = async ({
  queryKey,
}: {
  queryKey: string[];
}) => {
  const [collection, collectionId] = queryKey;
  const response = await axios.get(
    `${BASE_API_URL}/public-api/collections/${collectionId}`
  );
  return response;
};

// get asset data
export const getAssetData = async ({ queryKey }: { queryKey: string[] }) => {
  const [asset, assetId] = queryKey;
  const response = await axios.get(
    `${BASE_API_URL}/public-api/assets/${assetId}`
  );
  return response;
};
