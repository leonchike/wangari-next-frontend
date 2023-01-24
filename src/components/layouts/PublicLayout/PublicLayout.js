import styled from "styled-components";

import PublicHeader from "@/components/PublicHeader";
import PublicSidebar from "@/components/PublicSidebar";
import PublicFooter from "@/components/PublicFooter";

const PublicLayout = ({ children }) => {
  return (
    <Wrapper>
      <PublicHeader />
      <PublicSidebar />
      <main>{children}</main>
      <PublicFooter />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100%;
`;

export default PublicLayout;
