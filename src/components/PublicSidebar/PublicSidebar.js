import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import usePublicData from "@/state/publicData";
import { organizeCollections, createLinks } from "@/utils/organizeCollections";
import { QUERIES } from "@/styles/styleConstants";
import PublicSideBarLinkArea from "@/components/PublicSideBarLinkArea";
import { staticLinks } from "@/constants/staticLinks";

const PublicSidebar = () => {
  const [collectionsData, setCollectionsData] = useState([]);
  const { collectionSort, collections } = usePublicData();

  useEffect(() => {
    if (collectionSort && collections) {
      const organizedCollections = organizeCollections(
        collections,
        collectionSort
      );
      if (!organizedCollections) return;

      const links = createLinks(organizedCollections);
      setCollectionsData(links);
    }
  }, [collectionSort, collections]);

  // get current route
  const router = useRouter();
  const { route } = router;

  //if route is home page, return null
  if (route === "/") {
    return null;
  }

  return (
    <Sidebar>
      <PublicSideBarLinkArea
        links={collectionsData}
        staticLinks={staticLinks}
      />
    </Sidebar>
  );
};

const Sidebar = styled.aside`
  grid-area: sidebar;
  display: none;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    background: orange;
  }
`;

export default PublicSidebar;
