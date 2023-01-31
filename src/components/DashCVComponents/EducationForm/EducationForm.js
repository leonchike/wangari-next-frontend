import { useState } from "react";
import styled from "styled-components";

import { useCVDispatch, useCVUpdate } from "@/context/adminCVContext";

import Input from "@/components/Input";
import UnstyledButton from "@/components/UnstyledButton";
import DeleteConfirmation from "@/components/DeleteConfirmation";

const EducationForm = ({ data }) => {
  const { title } = data;
  const [formTitle, setFormTitle] = useState(title);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const dispatch = useCVDispatch();
  const updateCVData = useCVUpdate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch({
      type: "UPDATE_CV",
      id: data._id,
      [name]: value,
    });
    // API call to update title
    updateCVData(data._id, { [name]: value });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_CV", id: data._id });
    // API call to delete education
    updateCVData(data._id, { deletedStatus: true });
  };

  return (
    <InputWrapper>
      <StyledInput
        type="text"
        name="title"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
        onBlur={handleUpdate}
        placeholder="Title"
      />
      <Button onClick={() => setShowDeleteConfirmation(true)}>Delete</Button>

      <DeleteConfirmation
        isOpen={showDeleteConfirmation}
        onDismiss={() => setShowDeleteConfirmation(false)}
        title="Remove Field?"
        handleDelete={handleDelete}
      />
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-block-start: 5px;
  margin-block-end: 5px;
`;

const StyledInput = styled(Input)`
  flex: 1;
`;

const Button = styled(UnstyledButton)`
  transform: translateY(-5px);
  color: var(--color-gray-700);
  font-weight: var(--font-weight-medium);

  &:hover {
    color: var(--color-offblack);
  }
`;

export default EducationForm;
