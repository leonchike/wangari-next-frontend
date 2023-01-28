import styled from "styled-components";

import PressItem from "@/components/PublicPressComponents/PressItem";
import { QUERIES } from "@/styles/styleConstants";

const PressYearContainer = ({ year, data }) => {
  // sort by dataPublished reverse chronologically
  data.sort((a, b) => {
    const dateA = new Date(a.datePublished);
    const dateB = new Date(b.datePublished);
    return dateB - dateA;
  });

  return (
    <YearContainer>
      <YearTitle>{year}</YearTitle>
      <ArticleContainer>
        {data.map((item) => {
          return <PressItem key={item._id} data={item} />;
        })}
      </ArticleContainer>
    </YearContainer>
  );
};

const YearContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px auto;
  padding-block-end: 3rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-gray-300);
  }
`;

const YearTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-gray-700);
`;

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 70px;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export default PressYearContainer;
