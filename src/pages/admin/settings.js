import styled from "styled-components";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { PageWrapper } from "@/styles/reusableStyles";

import Composer from "@/components/DashSettingsComponents/Composer";

import { SettingsProvider } from "@/context/adminUserContext";

const Settings = () => {
  return (
    <SettingsProvider>
      <AdminPageWrapper>
        <InnerWrapper>
          <Composer />
        </InnerWrapper>
      </AdminPageWrapper>
    </SettingsProvider>
  );
};

const AdminPageWrapper = styled(PageWrapper)`
  padding-block-start: 1.7rem;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(500 / 16 * 1rem);
  margin: 0 auto;
`;

Settings.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Settings;
