import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const PublicSideBarLinkArea = ({ links, staticLinks }) => {
  const router = useRouter();

  return (
    <Wrapper>
      <div>
        <h2>Collections</h2>
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
`;

const LinkWrapper = styled.li`
  margin-block-end: 0.75rem;
`;

const StyledLink = styled(Link)`
  color: var(--color-offblack);
  text-decoration: none;
  border-left: 2px solid transparent;
  text-transform: uppercase;
  padding-inline-start: 0.5rem;
  padding-inline-end: 0.5rem;
  padding-block-start: 0.5rem;
  padding-block-end: 0.5rem;

  &[data-active="true"] {
    color: var(--color-orange);
    border-left: 2px solid var(--color-orange);
  }
`;

export default PublicSideBarLinkArea;
