import Link from "next/link";
import styled from "styled-components";

import { staticLinks } from "@/constants/staticLinks";

const PagesLinks = () => {
  return (
    <Wrapper>
      <Title>Pages</Title>
      <nav>
        <List role="list">
          {staticLinks.map((link) => (
            <li key={link.name}>
              <StyledLink href={link.dashPath} role="link">
                {link.name}
              </StyledLink>
            </li>
          ))}
        </List>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: var(--font-weight-normal);
  color: var(--color-gray-700);
`;

const List = styled.ul`
  margin-block-start: 0.3rem;
  margin-block-end: 2rem;

  li {
    height: 30px;
    display: flex;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-offblack);
  padding-block-start: 0.15rem;
  padding-block-end: 0.15rem;
  width: 100%;

  &:hover {
    opacity: 0.8;
  }
`;

export default PagesLinks;
