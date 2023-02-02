import styled from "styled-components";

import HeaderTitle from "@/components/DashCollectionComponents/HeaderTitle";
import HeaderSub from "@/components/DashCollectionComponents/HeaderSub";

import {
  useCollectionState,
  useCollectionDispatch,
} from "@/context/adminCollectionContext";

const Header = () => {
  const state = useCollectionState();
  const dispatch = useCollectionDispatch();

  return (
    <HeaderWrappper>
      <HeaderTitle id={state.collection._id} />
      <HeaderSub
        id={state.collection._id}
        newStatus={state.collection.newStatus}
        liveStatus={state.collection.liveStatus}
        numberOfWorks={state.collection.numberOfWorks}
        createdAt={state.collection.createdAt}
        dispatch={dispatch}
      />
    </HeaderWrappper>
  );
};

const HeaderWrappper = styled.header`
  padding-block-end: calc(18 / 16 * 1rem);
  border-bottom: 2px solid var(--color-gray-300);
`;

export default Header;
