import styled from "styled-components";

import { QUERIES } from "@/styles/styleConstants";

const DashboardHeader = () => {
  return (
    <Header>
      <h1>Dashboard</h1>
    </Header>
  );
};

const Header = styled.header`
  grid-area: header;
  background-color: #fff;
  display: flex;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

export default DashboardHeader;
