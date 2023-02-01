import { useEffect } from "react";
import styled from "styled-components";

import { usePressData } from "@/hooks/usePressData";
import { usePressState, usePressDispatch } from "@/context/adminPressContext";
import PressArticles from "@/components/DashboardPressComponents/PressArticles";
import AddNew from "@/components/DashboardPressComponents/AddNew";

const PressContent = () => {
  const state = usePressState();
  const dispatch = usePressDispatch();

  const { pressData, isLoading, error } = usePressData();

  useEffect(() => {
    // if contact.data is not empty, update the reducer state with the data
    if (!!pressData?.data) {
      dispatch({ type: "UPDATED_PRESS_FROM_API", press: pressData.data });
    }
  }, [pressData, dispatch]);

  if (isLoading && !pressData) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error {error.message}</div>;
  }

  if (!state) {
    return <div>Loading...</div>;
  }

  console.log(state.press);

  return (
    <Wrapper>
      <AddNew />
      <PressArticles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-block-start: calc(40 / 16 * 1rem);
`;

export default PressContent;
