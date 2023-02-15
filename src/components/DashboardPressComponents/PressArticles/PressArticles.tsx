import styled from "styled-components";
import { usePressState } from "@/context/adminPressContext";

import PressArticle from "@/components/DashboardPressComponents/PressArticle";

//types
import { PressData } from "@/types/apiTypes";

const PressArticles = () => {
  const state = usePressState();

  // order in reverse chronological order by datePublished
  state.press.sort((a: PressData, b: PressData) => {
    return (
      new Date(b.datePublished).valueOf() - new Date(a.datePublished).valueOf()
    );
  });

  return (
    <Wrapper>
      {state.press.map((item: PressData, index: number) => (
        <PressArticle key={item._id} data={item} index={index} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-block-start: calc(40 / 16 * 1rem);
  margin-block-end: calc(40 / 16 * 1rem);
`;

export default PressArticles;
