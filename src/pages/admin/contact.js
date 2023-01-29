import styled from "styled-components";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { PageWrapper, Title } from "@/styles/reusableStyles";

import Messages from "@/components/DashContactComponents/Messages";

const Contact = () => {
  return (
    <AdminPageWrapper>
      <InnerWrapper>
        <Title>Contact Messages</Title>
        <Messages />
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
  max-width: 600px;
  margin: 0 auto;
`;

Contact.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Contact;
