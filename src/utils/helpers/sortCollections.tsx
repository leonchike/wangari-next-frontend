import { CollectionData } from "@/types/apiTypes";

interface Collections {
  data: CollectionData[];
}

interface SortCollections {
  (collections: Collections, order: string[]): any;
}

export const sortCollections: SortCollections = (collections, order) => {
  const orderedCollections = order.map((id) => {
    return collections.data.find((collection) => collection._id === id);
  });
  return orderedCollections;
};
