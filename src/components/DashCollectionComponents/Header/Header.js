import styled from "styled-components";

import HeaderTitle from "@/components/DashCollectionComponents/HeaderTitle";

import {
  useCollectionState,
  useCollectionDispatch,
} from "@/context/adminCollectionContext";

const Header = () => {
  const state = useCollectionState();
  const dispatch = useCollectionDispatch();

  return (
    <header>
      <HeaderTitle
        id={state.collection._id}
        title={state.collection.name}
        dispatch={dispatch}
      />
    </header>
  );
};

export default Header;
