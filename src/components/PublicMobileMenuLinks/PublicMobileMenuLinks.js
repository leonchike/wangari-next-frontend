import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Spacer from "@/components/Spacer";

const PublicMobileMenuLinks = ({ links, staticLinks, onDismiss }) => {
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
                onClick={onDismiss}
              >
                {link.name}
              </StyledLink>
            </LinkWrapper>
          ))}
        </ul>
      </div>
      <Spacer height="1rem" />
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

const Title = styled.div`
  color: var(--color-gray-700);
  font-size: calc(20 / 16 * 1rem);
  font-weight: 550;
`;

const LinkWrapper = styled.li`
  margin-block-end: 1rem;
  margin-block-start: 1rem;
`;

const StyledLink = styled(Link)`
  color: var(--color-offblack);
  text-decoration: none;
  font-size: calc(18 / 16 * 1rem);
  font-weight: 500;

  &[data-active="true"] {
  }
`;

export default PublicMobileMenuLinks;
