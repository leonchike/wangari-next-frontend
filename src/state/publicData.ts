import useSWR from "swr";

import {
  getCollectionSort,
  getAllCollectionData,
} from "@/api/public/publicAPI";

const usePublicData = () => {
  const { data: collectionSort } = useSWR("collectionSort", getCollectionSort);
  const { data: collections } = useSWR("collections", getAllCollectionData);

  return {
    collectionSort,
    collections,
  };
};

export default usePublicData;
