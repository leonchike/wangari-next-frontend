import { useQuery } from "react-query";
import styled from "styled-components";

//api imports
import { getCVData } from "@/api/public/publicAPI";

//Layout imports
import PublicLayout from "@/components/layouts/PublicLayout";
import { QUERIES } from "@/styles/styleConstants";
import Loader from "@/components/Loader";
import { PageWrapper, Header, Title } from "@/styles/reusableStyles";

//Component imports
import Education from "@/components/PublicCVComponents/Education";
import Exhibition from "@/components/PublicCVComponents/Exhibition";

const CV = () => {
  const { data, isLoading, error } = useQuery("cv", getCVData);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return (
      <PageWrapper>
        <Header>
          <Title>CV</Title>
        </Header>
        <Loader />
      </PageWrapper>
    );
  }

  const educationData = data.data.filter((item) => item.type === "education");
  const soloData = data.data.filter((item) => item.type === "solo");
  const groupData = data.data.filter((item) => item.type === "group");

  return (
    <PageWrapper>
      <Header>
        <Title>CV</Title>
      </Header>
      <CVSection>
        <Education data={educationData} />
        <Exhibition data={soloData} category="solo" />
        <Exhibition data={groupData} category="group" />
      </CVSection>
    </PageWrapper>
  );
};

CV.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

const CVSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export default CV;
