export const filterAssets = (assets, collectionId) => {
  if (!assets || !assets.data) return;
  return assets.data.filter((asset) => asset.collectionRef === collectionId);
};

export const sortAssets = (assetSort, assets) => {
  if (!assetSort || !assets) return;
  const sortedAssets = assetSort.map((id) => {
    return assets.find((asset) => asset._id === id);
  });
  return sortedAssets;
};

export const formatWorksLabel = (numberOfWorks) => {
  if (numberOfWorks === 1) {
    return `${numberOfWorks} Masterpiece`;
  } else {
    return `${numberOfWorks} Masterpieces`;
  }
};
