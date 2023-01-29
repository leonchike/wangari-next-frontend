import Image from "next/image";
import styled from "styled-components";

import ADMINLOGO from "@/constants/images";

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <h1>Dashboard Sidebar</h1>
      <LogoWrapper>
        <StyledImage src={ADMINLOGO} alt="Admin Logo" />
      </LogoWrapper>
    </Sidebar>
  );
};

const Sidebar = styled.aside`
  grid-area: sidebar;

  display: flex;
  flex-direction: column;

  padding: 1rem;
  padding-block-start: 40px;
`;

const LogoWrapper = styled.div``;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;
export default DashboardSidebar;
