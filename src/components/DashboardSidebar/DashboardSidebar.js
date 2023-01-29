import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

import { DASHLOGO } from "@/constants/images";
import SidebarFooter from "@/components/DashSidebar/SidebarFooter";

import CollectionsLinks from "@/components/DashSidebar/CollectionsLinks";
import PagesLinks from "@/components/DashSidebar/PagesLinks";

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SideBarInside>
        <LogoWrapper>
          <StyledImage src={DASHLOGO} alt="Admin Logo" />
        </LogoWrapper>
        <Label>Admin</Label>
        <div>
          <CollectionsLinks />
          <PagesLinks />
        </div>
      </SideBarInside>

      <SidebarFooterWrapper>
        <SidebarFooter />
      </SidebarFooterWrapper>
    </Sidebar>
  );
};

const Sidebar = styled.aside`
  grid-area: sidebar;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-block-start: 40px;

  background-color: var(--color-gray-100);
  border-right: 1px solid var(--color-gray-300);
`;

const SideBarInside = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  align-self: start;
  top: 0;
`;

const LogoWrapper = styled.div``;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
`;

const Label = styled.div`
  margin-block-start: calc(14 / 16 * 1rem);
  margin-block-end: clamp(3rem, 5vw, 5rem);
  font-size: clamp(1rem);
`;

const SidebarFooterWrapper = styled.footer`
  position: absolute;
  bottom: 30px;
  width: 100%;
`;
export default DashboardSidebar;
