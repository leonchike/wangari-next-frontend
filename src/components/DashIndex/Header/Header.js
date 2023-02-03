import Link from "next/link";
import styled from "styled-components";

import { useDashboardState } from "@/context/adminDashboardContext";
import { Title } from "@/styles/reusableStyles";

const Header = () => {
  const { user } = useDashboardState();

  return (
    <HeaderWrapper>
      <Title>Dashboard</Title>
      {user && (
        <Container>
          <User>
            {user.firstName} {user.lastName}
          </User>
          , <span>{user.email}</span> -{" "}
          <StyledLink href="/admin/settings">Go to Settings</StyledLink>
        </Container>
      )}
    </HeaderWrapper>
  );
};

const Container = styled.div`
  font-size: 1.2rem;
  margin-block-start: 0.5rem;
`;

const User = styled.span`
  font-weight: var(--font-weight-bold);
`;

const StyledLink = styled(Link)`
  font-weight: var(--font-weight-bold);
  color: var(--color-offblack);
  text-underline-offset: 0.3rem;
`;

const HeaderWrapper = styled.header``;

export default Header;
