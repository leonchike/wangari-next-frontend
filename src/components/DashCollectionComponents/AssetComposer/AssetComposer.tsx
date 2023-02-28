import styled from "styled-components";

import Assets from "@/components/DashCollectionComponents/Assets";
import AddAsset from "@/components/DashCollectionComponents/AddAsset";
import ToggleReorder from "@/components/DashCollectionComponents/ToggleReorder";

const AssetComposer = () => {
  return (
    <Section>
      <h3>Works</h3>
      <AddAsset />
      <ToggleReorder />
      <Assets />
    </Section>
  );
};

const Section = styled.section`
  margin-block-start: 1.5rem;
`;

export default AssetComposer;
