import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { WEIGHTS } from "@/styles/styleConstants";
import UnstyledButton from "@/components/UnstyledButton";
import Icon from "@/components/Icon";
import VisuallyHidden from "@/components/VisuallyHidden";
import usePublicData from "@/state/publicData";
import { organizeCollections, createLinks } from "@/utils/organizeCollections";
import PublicMobileMenuLinks from "@/components/PublicMobileMenuLinks";
import { staticLinks } from "@/constants/staticLinks";

const PublicMobileMenu = ({ isOpen, onDismiss }) => {
  const [collectionsData, setCollectionsData] = useState([]);
  const { collectionSort, collections } = usePublicData();

  useEffect(() => {
    if (collectionSort && collections) {
      const organizedCollections = organizeCollections(
        collections,
        collectionSort
      );
      if (!organizedCollections) return;

      const links = createLinks(organizedCollections);
      setCollectionsData(links);
    }
  }, [collectionSort, collections]);

  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <Backdrop />
      <Content aria-label="Menu">
        <InnerWrapper>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <Nav>
            <PublicMobileMenuLinks
              links={collectionsData}
              staticLinks={staticLinks}
              onDismiss={onDismiss}
            />
          </Nav>
        </InnerWrapper>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  display: flex;
  justify-content: flex-end;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms;
`;

const Content = styled(DialogContent)`
  --overfill: 16px;
  position: relative;
  background: white;
  width: calc(300px + var(--overfill));
  height: 100%;
  margin-right: calc(var(--overfill) * -1);
  padding: 24px 32px;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
    animation-delay: 200ms;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  animation: ${fadeIn} 600ms both;
  animation-delay: 400ms;
  justify-content: center;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;
  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default PublicMobileMenu;
