import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import { QUERIES } from "@/styles/styleConstants";
import Icon from "@/components/Icon";
import UnstyledButton from "@/components/UnstyledButton";
import VisuallyHidden from "@/components/VisuallyHidden";
import PublicMobileMenu from "@/components/PublicMobileMenu";
import { fadeIn } from "@/styles/animations";

const PublicHeader = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // get current route
  const router = useRouter();
  const { route } = router;

  //if route is home page, return null
  if (route === "/") {
    return null;
  }

  return (
    <Header>
      <Button onClick={() => setShowMobileMenu(true)}>
        <Icon id="menu" size={32} />
        <VisuallyHidden>Menu</VisuallyHidden>
      </Button>

      <PublicMobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </Header>
  );
};

const Header = styled.header`
  grid-area: header;
  background-color: var(--color-white);
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid var(--color-gray-100);
  animation: ${fadeIn} 2000ms 500ms both;

  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const Button = styled(UnstyledButton)`
  padding: 0.5rem;
  transform: translateX(-0.5rem);

  color: var(--color-offblack);
`;

export default PublicHeader;
