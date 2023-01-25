import styled from "styled-components";

import ExhibitionItem from "@/components/PublicCVComponents/ExhibitionItem";

const YearContainer = ({ year, exhibitions }) => {
  const upcoming = exhibitions.filter((item) => item.status === "upcoming");
  const past = exhibitions.filter((item) => item.status === "past");

  return (
    <YearWrapper>
      <CVYearTitle>{year === 0 ? "Undated" : year}</CVYearTitle>
      {upcoming
        ? upcoming.map((item) => <ExhibitionItem data={item} key={item._id} />)
        : null}
      {past
        ? past.map((item) => <ExhibitionItem data={item} key={item._id} />)
        : null}
    </YearWrapper>
  );
};

const YearWrapper = styled.div`
  margin-block-end: 2rem;
`;

const CVYearTitle = styled.p`
  font-size: 1rem;
  color: var(--color-offblack);
`;

export default YearContainer;
