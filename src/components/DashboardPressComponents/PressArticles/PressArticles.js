import styled from "styled-components";
import { usePressState } from "@/context/adminPressContext";

import PressArticle from "@/components/DashboardPressComponents/PressArticle";

const PressArticles = () => {
  const state = usePressState();

  // order in reverse chronological order by datePublished
  state.press.sort((a, b) => {
    return new Date(b.datePublished) - new Date(a.datePublished);
  });

  return (
    <Wrapper>
      {state.press.map((item, index) => (
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
