import styled from "styled-components";

import Input from "@/components/Input";
import UnstyledButton from "@/components/UnstyledButton";

const EducationForm = ({ data, dispatch }) => {
  const { title } = data;

  const handleTitleChange = (e) => {
    dispatch({
      type: "UPDATE_CV",
      id: data._id,
      title: e.target.value,
    });
    // API call to update title
  };

  const handleDelete = () => {
    dispatch({ type: "DELETE_CV", id: data._id });
    // API call to delete education
  };

  return (
    <InputWrapper>
      <StyledInput
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder="Title"
      />
      <Button onClick={handleDelete}>Delete</Button>
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
