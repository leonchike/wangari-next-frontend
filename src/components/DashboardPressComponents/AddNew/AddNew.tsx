import { SetStateAction, useState } from "react";
import styled from "styled-components";

import Button from "@/components/Button";
import UnstyledButton from "@/components/UnstyledButton";
import Input from "@/components/Input";
import { QUERIES } from "@/styles/styleConstants";

import { usePressPost, usePressDispatch } from "@/context/adminPressContext";

export const AddNew = () => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [title, setTitle] = useState("");
  const postPressData = usePressPost();
  const dispatch = usePressDispatch();

  const handleAdd = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // add new article to database
    async function addToDB() {
      return await postPressData({ title: title });
    }
    addToDB().then((result) => {
      // add new article to state
      dispatch({
        type: "ADDED_PRESS",
        press: {
          title: title,
          _id: result.data._id,
          datePublished: result.data.datePublished,
        },
      });
      // hide form
      setShowNewForm(false);
      // reset title
      setTitle("");
    });
  };

  return (
    <Section>
      {!showNewForm && (
        <Button onClick={() => setShowNewForm(!showNewForm)}>
          Add New Article
        </Button>
      )}
      {showNewForm && (
        <FormWrapper>
          <Title>Add New Article</Title>
          <Form onSubmit={handleAdd}>
            <Input
              // @ts-ignore
              type="text"
              placeholder="Title"
              value={title}
              minLength="1"
              required
              onChange={(e: { target: { value: SetStateAction<string> } }) =>
                setTitle(e.target.value)
              }
            />
            <FormButton type="submit">Add</FormButton>
          </Form>
          <Footer>
            <UnstyledButton onClick={() => setShowNewForm(!showNewForm)}>
              Cancel
            </UnstyledButton>
          </Footer>
        </FormWrapper>
      )}
    </Section>
  );
};

const Section = styled.section``;

const FormWrapper = styled.div`
  padding: 1rem;
  box-shadow: var(--box-shadow);
  border-radius: var(--border-radius);

  @media ${QUERIES.tabletAndUp} {
    padding: 2rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 1.2rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
  align-items: center;
`;

const FormButton = styled(Button)`
  padding: 9px 20px 10px 20px;
  transform: translateY(-5px);
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

export default AddNew;
