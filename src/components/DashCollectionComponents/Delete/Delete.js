import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

import {
  useCollectionState,
  useCollectionUpdate,
} from "@/context/adminCollectionContext";

import UnstyledButton from "@/components/UnstyledButton";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import { routes } from "@/constants/staticLinks";

const Delete = () => {
  const router = useRouter();
  const updateCollectionData = useCollectionUpdate();
  const { collection } = useCollectionState();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const handleDelete = () => {
    const id = collection._id;
    updateCollectionData(id, { deletedStatus: true }).then(() => {
      router.push(routes.adminIndex);
    });
  };

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
          title="Delete Collection?"
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
