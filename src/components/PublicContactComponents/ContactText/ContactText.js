import styled from "styled-components";
import parsePhoneNumber from "libphonenumber-js";

const robertsContactData = {
  name: "Roberts Projects",
  robertsEmail: "info@robertsprojectsla.com",
  robertsPhone: "+13235490223",
};

const ContactText = () => {
  const { name, robertsEmail, robertsPhone } = robertsContactData;

  const robertsPhoneFormatted =
    parsePhoneNumber(robertsPhone).formatInternational();
  const robertsPhoneHref = `tel:${robertsPhoneFormatted}`;
  const mailLink = `mailto:${robertsEmail}`;

  return (
    <ContactWrapper>
      <div>For available works, contact {name}:</div>
      <div>
        <StyledLink role="link" href={robertsPhoneHref}>
          {robertsPhoneFormatted}
        </StyledLink>
      </div>
      <div>
        <StyledLink role="link" href={mailLink}>
          {robertsEmail}
        </StyledLink>
      </div>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  padding-top: 30px;
  font-size: 1.1rem;
  line-height: 1.2;
  display: grid;
  gap: 8px;
`;

const StyledLink = styled.a`
  color: var(--color-offblack);
  font-weight: var(--font-weight-bold);
`;

export default ContactText;
