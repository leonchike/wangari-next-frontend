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
      <SecondaryLinks>
        <ul role="list">
          {staticLinks.map((link) => (
            <LinkWrapper key={link.path} data-secondary-link="true">
              <StyledLink data-secondary-link="true" href={link.path}>
                {link.name}
              </StyledLink>
            </LinkWrapper>
          ))}
        </ul>
      </SecondaryLinks>
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

const SecondaryLinks = styled.div``;

const Title = styled.h2`
  color: var(--color-offblack);
  font-size: 1.25rem;
`;

const LinkWrapper = styled.li`
  margin-block-end: 0.75rem;

  &[data-secondary-link="true"] {
    margin-block-end: 0.25rem;
  }
`;

const StyledLink = styled(Link)`
  color: var(--color-offblack);
  text-decoration: none;
  border-left: 2px solid transparent;
  padding-block-start: 0.5rem;
  padding-block-end: 0.5rem;
  font-size: 0.9rem;

  &[data-secondary-link="true"] {
    color: var(--color-gray-900);
    font-size: 0.8rem;
    padding-block-start: 0.4rem;
    padding-block-end: 0.4rem;
  }

  &[data-active="true"] {
    color: var(--color-orange);
    border-left: 2px solid var(--color-orange);
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default PublicSideBarLinkArea;
