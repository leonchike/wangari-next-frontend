import { useState } from "react";
import styled from "styled-components";

// State and API
import {
  useCollectionState,
  useCollectionDispatch,
  useAssetUpdate,
} from "@/context/adminCollectionContext";

import Input from "@/components/Input";
import UnstyledButton from "@/components/UnstyledButton";
import DeleteConfirmation from "@/components/DeleteConfirmation";

import { QUERIES } from "@/styles/styleConstants";

const AssetDetails = ({ data }) => {
  const state = useCollectionState();
  const dispatch = useCollectionDispatch();
  const updateAsset = useAssetUpdate();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // find asset in state using data._id from props
  const asset = state.assets.find((asset) => asset._id === data._id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ id: data._id, type: "UPDATED_ASSET", [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    updateAsset(data._id, { [name]: value });
  };

  const handleDelete = () => {
    dispatch({ id: data._id, type: "DELETED_ASSET" });
    updateAsset(data._id, { deletedStatus: true });
  };

  return (
    <Wrapper>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Title"
          type="text"
          name="title"
          value={asset.title}
          onChange={handleChange}
          onBlur={handleBlur}
          padding="5px"
          labelFont="0.9rem"
          labelWeight="var(--font-weight-bold)"
        />
        <TextArea
          label="Story"
          type="textarea"
          name="story"
          value={asset.story}
          onChange={handleChange}
          onBlur={handleBlur}
          padding="5px"
          labelFont="0.9rem"
          labelWeight="var(--font-weight-bold)"
          rows="4"
        />
        <Grouped>
          <Input
            label="Medium"
            type="text"
            name="medium"
            value={asset.medium}
            onChange={handleChange}
            onBlur={handleBlur}
            padding="5px"
            labelFont="0.9rem"
            labelWeight="var(--font-weight-bold)"
          />
          <Input
            label="Year"
            type="text"
            name="year"
            value={asset.year}
            onChange={handleChange}
            onBlur={handleBlur}
            padding="5px"
            labelFont="0.9rem"
            labelWeight="var(--font-weight-bold)"
          />
        </Grouped>
        <GroupedDimensions>
          <Input
            label="Width (in)"
            type="number"
            name="widthInInches"
            value={asset.widthInInches}
            onChange={handleChange}
            onBlur={handleBlur}
            padding="5px"
            labelFont="0.9rem"
            labelWeight="var(--font-weight-bold)"
            noWidth={true}
          />
          <Input
            label="Height (in)"
            type="number"
            name="heightInInches"
            value={asset.heightInInches}
            onChange={handleChange}
            onBlur={handleBlur}
            padding="5px"
            labelFont="0.9rem"
            labelWeight="var(--font-weight-bold)"
            noWidth={true}
          />
        </GroupedDimensions>
      </Form>
      <Footer>
        <UnstyledButton onClick={() => setShowDeleteConfirmation(true)}>
          Delete
        </UnstyledButton>
      </Footer>
      {showDeleteConfirmation && (
        <DeleteConfirmation
          isOpen={showDeleteConfirmation}
          onDismiss={() => setShowDeleteConfirmation(false)}
          title="Are you sure you want to delete this work?"
          setShowDeleteConfirmation={setShowDeleteConfirmation}
          handleDelete={handleDelete}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
`;

const TextArea = styled(Input)`
  resize: vertical;
`;

const Grouped = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;

  @media ${QUERIES.laptopAndUp} {
    column-gap: 1rem;
    grid-template-columns: 1fr 0.4fr;
  }
`;

const GroupedDimensions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0.5rem;

  @media ${QUERIES.laptopAndUp} {
    column-gap: 1rem;
    grid-template-columns: 200px 200px;
    column-gap: 1rem;
  }
`;

const Footer = styled.footer`
  margin-block-start: 1.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default AssetDetails;
