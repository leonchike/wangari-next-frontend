import { useRouter } from "next/router";
import styled from "styled-components";

import PublicHeader from "@/components/PublicHeader";
import PublicSidebar from "@/components/PublicSidebar";
import PublicFooter from "@/components/PublicFooter";
import { QUERIES } from "@/styles/styleConstants";

const PublicLayout = ({ children }) => {
  const router = useRouter();

  let home = true;

  if (router.pathname !== "/") {
    home = false;
  }

  return (
    <Wrapper home={home}>
      <PublicHeader />
      <PublicSidebar />
      <Main>{children}</Main>
      <PublicFooter />
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
    "main"
    "footer";

  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;

  @media ${QUERIES.tabletAndUp} {
    grid-template-areas:
      "sidebar main"
      "footer footer";

    grid-template-rows: 1fr auto;
    grid-template-columns: clamp(200px, 25vw, 300px) 1fr;

    ${(p) => p.home && "grid-template-columns: 0 1fr;"}
  }
`;

const Main = styled.main`
  grid-area: main;
`;

export default PublicLayout;
