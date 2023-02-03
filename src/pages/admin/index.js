import styled from "styled-components";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { PageWrapper, Title } from "@/styles/reusableStyles";

import Composer from "@/components/DashIndex/Composer";
import { DashboardProvider } from "@/context/adminDashboardContext";

const Dashboard = () => {
  return (
    <DashboardProvider>
      <AdminPageWrapper>
        <InnerWrapper>
          <Composer />
        </InnerWrapper>
      </AdminPageWrapper>
    </DashboardProvider>
  );
};

const AdminPageWrapper = styled(PageWrapper)`
  padding-block-start: 1.7rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(1200 / 16 * 1rem);
  margin: 0 auto;
`;

Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Dashboard;
