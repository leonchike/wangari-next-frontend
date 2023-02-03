import styled from "styled-components";

import { useDashboardState } from "@/context/adminDashboardContext";
import Tile from "@/components/DashIndex/Tile";
import { QUERIES } from "@/styles/styleConstants";
import { staticLinks } from "@/constants/staticLinks";

const Pages = () => {
  const state = useDashboardState();
  const user = state.user;

  return (
    <Wrapper>
      <Title>Pages</Title>
      <Grid>
        {staticLinks.map((link) => (
          <Tile key={link.name} type="page" data={link} user={user} />
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-block-start: 4rem;
  margin-block-end: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
`;

const Grid = styled.div`
  --min-column-width: min(300px, 100%);
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  margin-block-start: 1rem;
  margin-block-end: 1rem;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--min-column-width), 1fr)
    );
    column-gap: 3rem;
  }
`;

export default Pages;
