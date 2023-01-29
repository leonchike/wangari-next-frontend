export const sortCollections = (collections, order) => {
  const orderedCollections = order.map((id) => {
    return collections.data.find((collection) => collection._id === id);
  });
  return orderedCollections;
};
