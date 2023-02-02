import styled from "styled-components";

import Assets from "@/components/DashCollectionComponents/Assets";
import AddAsset from "@/components/DashCollectionComponents/AddAsset";

const AssetComposer = () => {
  return (
    <Section>
      <h3>Assets</h3>
      <AddAsset />
      <Assets />
    </Section>
  );
};

const Section = styled.section`
  margin-block-start: 1.5rem;
`;

export default AssetComposer;
