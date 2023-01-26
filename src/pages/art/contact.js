import { useQuery } from "react-query";
import styled from "styled-components";

//api imports

//component imports
import ContactText from "@/components/PublicContactComponents/ContactText";
import ContactForm from "@/components/PublicContactComponents/ContactForm";

//layout imports
import PublicLayout from "@/components/layouts/PublicLayout";
import Loader from "@/components/Loader";
import { PageWrapper, Header, Title } from "@/styles/reusableStyles";
import Spacer from "@/components/layouts/Spacer";

const Contact = () => {
  return (
    <PageWrapper>
      <Header>
        <Title>Contact</Title>
      </Header>
      <ContactSection>
        <ContactText />
        <Spacer size={50} />
        <ContactForm />
      </ContactSection>
    </PageWrapper>
  );
};

Contact.getLayout = function getLayout(page) {
  return <PublicLayout>{page}</PublicLayout>;
};

const ContactSection = styled.section``;

export default Contact;
