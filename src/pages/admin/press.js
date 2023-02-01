import styled from "styled-components";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { PageWrapper, Title } from "@/styles/reusableStyles";
import { PressProvider } from "@/context/adminPressContext";

import PressContent from "@/components/DashboardPressComponents/PressContent";

const Press = () => {
  return (
    <PressProvider>
      <AdminPageWrapper>
        <InnerWrapper>
          <Title>Press</Title>
          <PressContent />
        </InnerWrapper>
      </AdminPageWrapper>
    </PressProvider>
  );
};

const AdminPageWrapper = styled(PageWrapper)`
  padding-block-start: 1.7rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

Press.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Press;
