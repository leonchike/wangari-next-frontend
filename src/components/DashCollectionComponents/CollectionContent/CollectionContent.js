import Header from "@/components/DashCollectionComponents/Header";
import StorySection from "@/components/DashCollectionComponents/StorySection";
import AssetComposer from "@/components/DashCollectionComponents/AssetComposer";
import Delete from "@/components/DashCollectionComponents/Delete";

const CollectionContent = () => {
  return (
    <div>
      <Header />
      <StorySection />
      <AssetComposer />
      <Delete />
    </div>
  );
};

export default CollectionContent;
