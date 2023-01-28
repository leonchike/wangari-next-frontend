import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

import { fadeIn } from "@/styles/animations";

const PublicSideBarLinkArea = ({ links, staticLinks }) => {
  const router = useRouter();
  // get current path
  const currentPath = router.asPath;

  return (
    <Wrapper>
      <div>
        <Title>Collections</Title>
        <ul role="list">
          {links.map((link) => {
            let active = false;
            if (link.path === currentPath) {
              active = true;
            } else {
              active = false;
            }

            return (
              <LinkWrapper key={link.path}>
                <StyledLink
                  href={link.path}
                  data-active={active ? "true" : "false"}
                >
                  {link.name}
                </StyledLink>
              </LinkWrapper>
            );
          })}
        </ul>
      </div>
      <SecondaryLinks>
        <ul role="list">
          {staticLinks.map((link) => {
            let active = false;
            if (link.path === currentPath) {
              active = true;
            } else {
              active = false;
            }

            return (
              <LinkWrapper key={link.path} data-secondary-link="true">
                <StyledLink
                  data-secondary-link="true"
                  data-active={active ? "true" : "false"}
                  href={link.path}
                >
                  {link.name}
                </StyledLink>
              </LinkWrapper>
            );
          })}
        </ul>
      </SecondaryLinks>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  padding-inline-start: 1rem;
  padding-block-start: calc(40 / 16 * 1rem);
  animation: ${fadeIn} 2000ms 500ms both;
  top: 0;
  align-self: start;
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
    font-weight: var(--font-weight-heavy);
  }

  &:hover {
    opacity: 0.9;
  }
`;

export default PublicSideBarLinkArea;
