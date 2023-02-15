export const organizeCollections = (collections, collectionSort) => {
  const arrayOfOrderedCollections = collectionSort?.data?.data[0]?.collections;
  const arrayOfAllCollections = collections?.data?.data;
  const filteredArray = arrayOfOrderedCollections.filter((collection) => {
    const collectionId = collection;
    const collectionData = arrayOfAllCollections.find(
      (collectionObj) => collectionObj._id === collectionId
    );
    if (collectionData) {
      return collectionData;
    }
  });
  const filteredArrayWithCollectionData = filteredArray.map((collection) => {
    const collectionData = arrayOfAllCollections.find(
      (collectionObj) => collectionObj._id === collection
    );
    return collectionData;
  });

  return filteredArrayWithCollectionData;
};

export const createLinks = (data) => {
  const links = data.map((collection) => {
    const link = {
      name: collection.name,
      path: `/art/collections/${collection._id}`,
    };
    return link;
  });
  return links;
};
