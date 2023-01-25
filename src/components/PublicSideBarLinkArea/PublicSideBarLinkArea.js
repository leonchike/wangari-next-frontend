import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { fadeIn } from "@/styles/animations";

const PublicSideBarLinkArea = ({ links, staticLinks }) => {
  const router = useRouter();

  return (
    <Wrapper>
      <div>
        <Title>Collections</Title>
        <ul role="list">
          {links.map((link) => (
            <LinkWrapper key={link.path}>
              <StyledLink
                href={link.path}
                data-active={router.pathname === link.path ? "true" : "false"}
              >
                {link.name}
              </StyledLink>
            </LinkWrapper>
          ))}
        </ul>
      </div>
      <div>
        <ul role="list">
          {staticLinks.map((link) => (
            <LinkWrapper key={link.path}>
              <StyledLink href={link.path}>{link.name}</StyledLink>
            </LinkWrapper>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline-start: 1rem;
  padding-block-start: calc(40 / 16 * 1rem);
  animation: ${fadeIn} 2000ms 500ms both;
`;

const Title = styled.h2`
  color: var(--color-gray-900);
`;

const LinkWrapper = styled.li`
  margin-block-end: 0.75rem;
`;

const StyledLink = styled(Link)`
  color: var(--color-gray-700);
  text-decoration: none;
  border-left: 2px solid transparent;
  text-transform: uppercase;
  padding-block-start: 0.5rem;
  padding-block-end: 0.5rem;

  &[data-active="true"] {
    color: var(--color-orange);
    border-left: 2px solid var(--color-orange);
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default PublicSideBarLinkArea;
