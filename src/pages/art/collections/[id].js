import PublicLayout from "@/components/layouts/PublicLayout";
import usePublicData from "@/state/publicData";

const Collections = () => {
  // const { collectionSort, collections } = usePublicData();

  return (
    <div>
      <h1>Collections</h1>
    </div>
  );
};

Collections.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Collections;
