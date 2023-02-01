import styled from "styled-components";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { PageWrapper, Title } from "@/styles/reusableStyles";

import AboutContent from "@/components/DashAboutComponents/AboutContent";
import { AboutProvider } from "@/context/adminAboutContext";

const About = () => {
  return (
    <AboutProvider>
      <AdminPageWrapper>
        <InnerWrapper>
          <Title>About</Title>
          <AboutContent />
        </InnerWrapper>
      </AdminPageWrapper>
    </AboutProvider>
  );
};

const AdminPageWrapper = styled(PageWrapper)`
  padding-block-start: 1.7rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

About.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default About;
