import { useState } from "react";
import styled from "styled-components";

import Input from "@/components/Input";
import Button from "@/components/Button";
import UnstyledButton from "@/components/UnstyledButton";

import { useCVDispatch, useCVPost } from "@/context/adminCVContext";

const NewItem = ({ type }) => {
  const dispatch = useCVDispatch();
  const postCVData = useCVPost();
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");

  const options = {
    education: {
      title: "+ Add a Education field",
      dbType: "education",
    },
    solo: {
      title: "+ Add a Solo Exhibition field",
      dbType: "solo",
    },
    group: {
      title: "+ Add a Group Exhibition field",
      dbType: "group",
    },
  };

  const handleRevealForm = () => {
    // reveal form
    setShowForm(true);
  };

  const handleHideForm = () => {
    // hide form
    setShowForm(false);
    // reset title
    setTitle("");
  };

  const handleAddNewItem = (e) => {
    e.preventDefault();
    // add new item to state
    dispatch({
      type: "ADD_CV",
      cv: {
        title,
        type: options[type].dbType,
      },
    });
    // add new item to db
    postCVData({
      title,
      type: options[type].dbType,
    });
    // hide form
    handleHideForm();
  };

  const buttonText = showForm ? "Cancel" : `${options[type].title}`;

  return (
    <Wrapper>
      {showForm && (
        <Form onSubmit={handleAddNewItem}>
          <Input
            type="text"
            name="title"
            placeholder="Enter a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <ButtonWrapper>
            <Button type="submit">Add</Button>
            <CancelButtton onClick={handleHideForm}>Cancel</CancelButtton>
          </ButtonWrapper>
        </Form>
      )}
      {!showForm && (
        <UnstyledButton onClick={handleRevealForm}>{buttonText}</UnstyledButton>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  margin-block-start: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  transform: translateY(-5px);
`;

const AddButton = styled(Button)``;

const CancelButtton = styled(Button)`
  /* padding-inline-start: 10px;
  padding-inline-end: 10px; */
  padding: 9px 10px;
  background-color: transparent;
  border: 1px solid var(--color-gray-700);
  color: var(--color-gray-700);

  &:hover {
    background-color: var(--color-urgent);
    border: 1px solid var(--color-urgent);
    color: var(--color-white);
  }
`;

export default NewItem;
