import { useRouter } from "next/router";
import { useQuery } from "react-query";

//API imports
import { getAssetData, getCollectionData } from "@/api/public/publicAPI";

//Component imports
import Loader from "@/components/Loader";
import GalleryViewController from "@/components/PublicGalleryComponents/GalleryViewController";

//layout imports
import GalleryLayout from "@/components/layouts/GalleryLayout";
import { BREAKPOINTS } from "@/styles/styleConstants";

const Gallery = () => {
  const router = useRouter();
  const { id } = router.query;

  //Query
  const { data, isLoading, isError } = useQuery(["asset", id], getAssetData);

  // get collection ID from query data
  const collectionId = data?.data?.data?.collectionRef;

  const collectionQuery = useQuery(
    ["collection", collectionId],
    getCollectionData,
    {
      enabled: !!collectionId,
    }
  );

  // if the query is loading, show the loading component
  if (isLoading || collectionQuery.isLoading) {
    return <Loader />;
  }

  // if the query has an error, show the error
  if (isError || collectionQuery.isError) {
    return <div>There was an error</div>;
  }

  // Query window width and redirect to the collection page if the window is too small with the id as a url hash param
  if (typeof window !== "undefined") {
    const windowWidth = window.innerWidth;
    if (windowWidth < BREAKPOINTS.tabletMin) {
      router.push(`/art/collections/${collectionId}#${id}`);
    }
  }

  const assetData = data.data.data;
  const assetArray = collectionQuery.data.data.data.assetSort;

  return (
    <GalleryViewController
      id={id}
      collectionId={collectionId}
      assetData={assetData}
      assetArray={assetArray}
    />
  );
};

Gallery.getLayout = function getLayout(page) {
  return <GalleryLayout>{page}</GalleryLayout>;
};

export default Gallery;
