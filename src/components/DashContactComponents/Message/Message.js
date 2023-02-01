import { useState } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { updateContactData } from "@/hooks/useContactData";

import { formatDateWithTime } from "@/utils/formatDate";

import Button from "@/components/Button";
import UnstyledButton from "@/components/UnstyledButton";
import DeleteConfirmation from "@/components/DeleteConfirmation";

const Message = ({ data, dispatch }) => {
  const { firstName, lastName, email, subject, message, dateCreatedManual } =
    data;
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDelete = async () => {
    const { _id } = data;
    const id = _id;
    dispatch({ type: "DELETE_MESSAGE", id });
    await updateContactData(id, { deletedStatus: true });
    setShowDeleteConfirmation(false);
  };

  const openEmailClient = () => {
    window.open(`mailto:${email}`);
  };

  return (
    <Article>
      <DateStampWrapper>
        <div>{formatDateWithTime(dateCreatedManual)}</div>
      </DateStampWrapper>
      <DataWrapper>
        <span>Name: </span>
        {firstName} {lastName}
      </DataWrapper>
      <DataWrapper>
        <span>Email: </span>
        {email}
      </DataWrapper>
      <DataWrapper>
        <span>Subject: </span>
        {subject}
      </DataWrapper>
      <MessageText>
        <DataWrapper data-message="true">
          <span>Message:</span>
        </DataWrapper>
        <MessageBody>{message}</MessageBody>
      </MessageText>

      <Actions>
        <Button onClick={openEmailClient}>Respond via Email</Button>
        <UnstyledButton onClick={() => setShowDeleteConfirmation(true)}>
          Remove
        </UnstyledButton>
      </Actions>
      <DeleteConfirmation
        isOpen={showDeleteConfirmation}
        onDismiss={() => setShowDeleteConfirmation(false)}
        title="Remove Message?"
        handleDelete={handleDelete}
      />
    </Article>
  );
};

const Article = styled.article`
  padding: 15px 20px 22px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  color: var(--color-offblack);

  box-shadow: var(--box-shadow);
`;

const DateStampWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-block-end: 12px;

  div {
    font-size: 0.8rem;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-block-end: 8px;

  span {
    font-weight: var(--font-weight-bold);
    padding-inline-end: 5px;
  }

  &[data-message="true"] {
    padding-block-end: 0;
  }
`;

const MessageText = styled.div``;

const MessageBody = styled.div`
  white-space: pre-wrap;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block-start: 35px;
`;

export default Message;
