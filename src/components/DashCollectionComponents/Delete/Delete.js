import { useState } from "react";
import styled from "styled-components";

import UnstyledButton from "@/components/UnstyledButton";
import DeleteConfirmation from "@/components/DeleteConfirmation";

const Delete = () => {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDelete = () => {};

  return (
    <DeleteWrapper>
      <DeleteBtn onClick={() => setShowDeleteConfirmation(true)}>
        Delete collection
      </DeleteBtn>
      {showDeleteConfirmation && (
        <DeleteConfirmation
          isOpen={showDeleteConfirmation}
          onDismiss={() => setShowDeleteConfirmation(false)}
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          handleDelete={handleDelete}
          title="Confirm Deleting Collection?"
        />
      )}
    </DeleteWrapper>
  );
};

const DeleteWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-block-start: 4rem;
  margin-block-end: 2rem;
`;

const DeleteBtn = styled(UnstyledButton)`
  color: var(--color-urgent);
  text-decoration: underline;
  text-underline-offset: 0.2rem;
  font-weight: var(--font-weight-bold);
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;

export default Delete;
