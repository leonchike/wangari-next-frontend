import { AssetData, AssetsAPIResponse } from "@/types/apiTypes";

interface FilterAssets {
  (
    assets: {
      data: AssetData[];
    },
    collectionId: string
  ): { data: AssetData[] } | undefined;
}

// @ts-ignore
export const filterAssets: FilterAssets = (assets, collectionId) => {
  if (!assets || !assets.data) return;
  return assets.data.filter((asset) => asset.collectionRef === collectionId);
};

interface SortAssets {
  (assetSort: string[], assets: AssetData[]): AssetData[] | undefined;
}

export const sortAssets: SortAssets = (assetSort, assets) => {
  if (!assetSort || !assets) return;
  const sortedAssets = assetSort.map((id) => {
    return assets.find((asset) => asset._id === id);
  });
  return sortedAssets;
};

interface FormatWorksLabel {
  (numberOfWorks: number): string;
}

export const formatWorksLabel: FormatWorksLabel = (numberOfWorks) => {
  if (numberOfWorks === 1) {
    return `${numberOfWorks} Masterpiece`;
  } else {
    return `${numberOfWorks} Masterpieces`;
  }
};
