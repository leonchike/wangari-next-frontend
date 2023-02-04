import styled from "styled-components";
import UnstyledButton from "@/components/UnstyledButton";

const SettingSection = ({ label, data, handleEdit }) => {
  return (
    <Section>
      <Info>
        <Label>{label}</Label>
        <Data>{data}</Data>
      </Info>
      <UnstyledButton onClick={handleEdit}>Edit</UnstyledButton>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Info = styled.div``;

const Data = styled.div`
  color: var(--color-gray-700);
`;

const Label = styled.div`
  font-size: 1.1rem;
`;

export default SettingSection;
