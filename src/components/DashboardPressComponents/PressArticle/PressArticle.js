import styled from "styled-components";
import { useState } from "react";

import { usePressDispatch, usePressUpdate } from "@/context/adminPressContext";

import Input from "@/components/Input";
import UnstyledButton from "@/components/UnstyledButton";
import DeleteConfirmation from "@/components/DeleteConfirmation";
import { QUERIES } from "@/styles/styleConstants";

const PressArticle = ({ data, index }) => {
  const {
    title,
    description,
    publication,
    author,
    publicationLogoUrl,
    datePublished,
    url,
  } = data;

  let jsDate = new Date(data.datePublished).toISOString().split("T")[0];

  // form state
  const [formState, setFormState] = useState({
    title,
    description,
    publication,
    author,
    datePublished: jsDate,
    publicationLogoUrl,
    url,
  });

  // delete confirmation state
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // reducer state
  const dispatch = usePressDispatch();
  // api update function
  const updatePressData = usePressUpdate();

  const handleUpdatePress = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch({
      type: "UPDATED_PRESS",
      id: data._id,
      [name]: value,
    });
    // API call to update press
    updatePressData(data._id, { [name]: value });
  };

  const handleDelete = () => {
    dispatch({ type: "DELETED_PRESS", id: data._id });
    // API call to delete press
    updatePressData(data._id, { deletedStatus: true });
  };

  return (
    <PressArticleWrapper>
      <Title>Article #{index + 1}</Title>
      <Form>
        <Input
          label="Title"
          type="text"
          name="title"
          value={formState.title}
          onChange={(e) =>
            setFormState({ ...formState, title: e.target.value })
          }
          onBlur={handleUpdatePress}
          placeholder="Title"
        />
        <Input
          label="Publication"
          type="text"
          name="publication"
          value={formState.publication}
          onChange={(e) =>
            setFormState({ ...formState, publication: e.target.value })
          }
          onBlur={handleUpdatePress}
          placeholder="Publication"
        />
        <FormRow>
          <Input
            label="Author"
            type="text"
            name="author"
            value={formState.author}
            onChange={(e) =>
              setFormState({ ...formState, author: e.target.value })
            }
            onBlur={handleUpdatePress}
            placeholder="Author"
          />
          <Input
            label="Date Published"
            type="date"
            name="datePublished"
            value={formState.datePublished}
            onChange={(e) =>
              setFormState({ ...formState, datePublished: e.target.value })
            }
            onBlur={handleUpdatePress}
          />
        </FormRow>
        <TextArea
          label="Abstract / Synopsis"
          type="textarea"
          rows="4"
          name="description"
          value={formState.description}
          onChange={(e) =>
            setFormState({ ...formState, description: e.target.value })
          }
          onBlur={handleUpdatePress}
          placeholder="Abstract / Synopsis"
        />
        <Input
          label="Publication Logo URL"
          type="text"
          name="publicationLogoUrl"
          value={formState.publicationLogoUrl}
          onChange={(e) =>
            setFormState({ ...formState, publicationLogoUrl: e.target.value })
          }
          onBlur={handleUpdatePress}
          placeholder="Publication Logo URL"
        />
        <Input
          label="Article Link"
          type="text"
          name="url"
          value={formState.url}
          onChange={(e) => setFormState({ ...formState, url: e.target.value })}
          onBlur={handleUpdatePress}
          placeholder="Article Link"
        />
      </Form>
      <Footer>
        <UnstyledButton onClick={() => setShowDeleteConfirmation(true)}>
          Remove
        </UnstyledButton>
      </Footer>
      {showDeleteConfirmation && (
        <DeleteConfirmation
          isOpen={showDeleteConfirmation}
          onDismiss={() => setShowDeleteConfirmation(false)}
          title="Remove Press Article"
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          handleDelete={handleDelete}
        />
      )}
    </PressArticleWrapper>
  );
};

const PressArticleWrapper = styled.article`
  padding: 1rem;
  margin-block-end: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);

  @media ${QUERIES.tabletAndUp} {
    padding: 2rem;
  }
`;

const Title = styled.p`
  font-size: 1.15rem;
  font-weight: var(--font-weight-bold);
  margin-block-end: 1rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.35rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(150px, 170px);
  gap: 1rem;

  @media ${QUERIES.tabletAndUp} {
    gap: 2rem;
  }
`;

const TextArea = styled(Input)`
  resize: vertical;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-block-start: 1rem;
`;

export default PressArticle;
