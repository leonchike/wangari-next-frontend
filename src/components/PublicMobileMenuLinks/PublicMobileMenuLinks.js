import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

const PublicMobileMenuLinks = ({ links, staticLinks, onDismiss }) => {
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
                onClick={onDismiss}
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
              <StyledLink href={link.path} onClick={onDismiss}>
                {link.name}
              </StyledLink>
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
`;

const LinkWrapper = styled.li`
  margin-block-end: 1rem;
  margin-block-start: 1rem;
`;

const StyledLink = styled(Link)`
  color: var(--color-offblack);
  text-decoration: none;
  text-transform: uppercase;
  font-size: calc(18 / 16 * 1rem);

  &[data-active="true"] {
  }
`;

export default PublicMobileMenuLinks;
