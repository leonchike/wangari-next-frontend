import { useQuery } from "react-query";
import styled from "styled-components";

//API imports
import { getPressData } from "@/api/public/publicAPI";

//Component imports
import PressYearContainer from "@/components/PublicPressComponents/PressYearContainer";

//Layout imports
import PublicLayout from "@/components/layouts/PublicLayout";
import Loader from "@/components/Loader";
import { PageWrapper, Header, Title } from "@/styles/reusableStyles";

const Press = () => {
  const { data, isLoading, error } = useQuery("press", getPressData);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <PageWrapper>
        <Header>
          <Title>Press</Title>
        </Header>
        <Loader />
      </PageWrapper>
    );
  }

  // Consolidate the years into a SET to remove duplicates
  const yearsSet = new Set();
  data.data.data.forEach((item) => {
    const date = new Date(item.datePublished);

    if (item.year === "" || item.year === null) {
      item.year = 0;
    }
    yearsSet.add(date.getFullYear());
  });
  const years = [...yearsSet];
  years.sort((a, b) => b - a);

  return (
    <PageWrapper>
      <Header>
        <Title>Press</Title>
      </Header>
      <PressSection>
        {years.map((year) => {
          const pressData = data.data.data.filter((item) => {
            const itemYear = new Date(item.datePublished).getFullYear();
            return itemYear === year;
          });
          return <PressYearContainer key={year} year={year} data={pressData} />;
        })}
      </PressSection>
    </PageWrapper>
  );
};

Press.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

const PressSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default Press;
