import styled from "styled-components";

import DashboardHeader from "@/components/DashboardHeader";
import DashboardSidebar from "@/components/DashboardSidebar";

import WithAuth from "@/utils/Api/auth/WithAuth";

import { QUERIES } from "@/styles/styleConstants";

const DashboardLayout = ({ children }) => {
  return (
    <Wrapper>
      <DashboardHeader />
      <DashboardSidebar />
      <Main>{children}</Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  height: 100%;
  display: grid;

  grid-template-areas:
    "header"
    "main";

  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  isolation: isolate;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas: "sidebar main";

    grid-template-rows: 1fr;
    grid-template-columns: clamp(200px, 20vw, 225px) 1fr;
  }
`;

const Main = styled.main``;

export default WithAuth(DashboardLayout);
