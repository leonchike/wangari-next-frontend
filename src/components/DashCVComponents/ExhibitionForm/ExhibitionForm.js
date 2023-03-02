import { useState } from "react";
import styled from "styled-components";

import { useCVDispatch, useCVUpdate } from "@/context/adminCVContext";

import Input from "@/components/Input";
import UnstyledButton from "@/components/UnstyledButton";
import DeleteConfirmation from "@/components/DeleteConfirmation";

const EducationForm = ({ data }) => {
  const { status, title, year } = data;
  const [formTitle, setFormTitle] = useState(title);
  const [formYear, setFormYear] = useState(year);
  const [formStatus, setFormStatus] = useState(status);
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
      <Inputs>
        <YearInput
          type="text"
          name="year"
          value={formYear}
          onChange={(e) => setFormYear(e.target.value)}
          onBlur={handleUpdate}
          placeholder="Year"
          noWidth
        />
        <TitleInput
          type="text"
          name="title"
          value={formTitle}
          onChange={(e) => setFormTitle(e.target.value)}
          onBlur={handleUpdate}
          placeholder="Title"
          noWidth
        />
        <StatusInput
          type="select"
          name="status"
          value={formStatus}
          onChange={(e) => setFormStatus(e.target.value)}
          onBlur={handleUpdate}
          placeholder="Status"
          noWidth
        >
          <option value="forthcoming">forthcoming</option>
          <option value="past">Past</option>
        </StatusInput>
      </Inputs>
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

const Inputs = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 58px 1fr 100px;
  gap: 0.5rem;
`;

const YearInput = styled(Input)`
  width: 58px;
  flex: 0;
`;

const TitleInput = styled(Input)`
  flex: 1;
`;

const StatusInput = styled(Input)`
  width: 100px;
  flex: 0;
`;

const Button = styled(UnstyledButton)`
  flex: 0;
  transform: translateY(-5px);
  color: var(--color-gray-700);
  font-weight: var(--font-weight-medium);

  &:hover {
    color: var(--color-offblack);
  }
`;

export default EducationForm;
