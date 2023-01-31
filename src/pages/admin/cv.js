import styled from "styled-components";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { PageWrapper, Title } from "@/styles/reusableStyles";

import CVContent from "@/components/DashCVComponents/CVContent";

const CV = () => {
  return (
    <AdminPageWrapper>
      <InnerWrapper>
        <Title>Curriculum Vitae</Title>
        <CVContent />
      </InnerWrapper>
    </AdminPageWrapper>
  );
};

const AdminPageWrapper = styled(PageWrapper)`
  padding-block-start: 1.7rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

CV.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default CV;
