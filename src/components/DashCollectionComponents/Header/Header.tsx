import styled from "styled-components";

import HeaderTitle from "@/components/DashCollectionComponents/HeaderTitle";
import HeaderSub from "@/components/DashCollectionComponents/HeaderSub";

const Header = () => {
  return (
    <HeaderWrappper>
      <HeaderTitle />
      <HeaderSub />
    </HeaderWrappper>
  );
};

const HeaderWrappper = styled.header`
  padding-block-end: calc(18 / 16 * 1rem);
  border-bottom: 2px solid var(--color-gray-300);
`;

export default Header;
