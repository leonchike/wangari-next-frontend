import styled from "styled-components";

import { formatDateWithTime } from "@/utils/formatDate";

const Message = ({ data }) => {
  const { firstName, lastName, email, subject, message, dateCreatedManual } =
    data;

  return (
    <Article>
      <DateStampWrapper>
        <div>{formatDateWithTime(dateCreatedManual)}</div>
      </DateStampWrapper>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Article>
  );
};

const Article = styled.article`
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  box-shadow: 0px 1.1px 2.9px -4px rgba(0, 0, 0, 0.044),
    0px 2.2px 7.4px -4px rgba(0, 0, 0, 0.059),
    0px 3.8px 15.1px -4px rgba(0, 0, 0, 0.068),
    0px 8.3px 31px -4px rgba(0, 0, 0, 0.074),
    0px 45px 85px -4px rgba(0, 0, 0, 0.08);
`;

const DateStampWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  div {
    font-size: 0.8rem;
  }
`;

export default Message;
