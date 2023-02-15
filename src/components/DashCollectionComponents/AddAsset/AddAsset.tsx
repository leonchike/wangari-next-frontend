import styled from "styled-components";
import { useSWRConfig } from "swr";

// State and API
import {
  useCollectionState,
  useCollectionDispatch,
  useAssetPost,
} from "@/context/adminCollectionContext";

import Button from "@/components/Button";
import UnstyledButton from "@/components/UnstyledButton";
import Input from "@/components/Input";
import { QUERIES } from "@/styles/styleConstants";

const AddAsset = () => {
  const state = useCollectionState();
  const dispatch = useCollectionDispatch();
  const postAssetData = useAssetPost();
  const { mutate } = useSWRConfig();

  const showForm = state.addAsset.showForm;
  const title = state.addAsset.title;

  const handleFormUpdate = (e: { target: { value: string } }) => {
    dispatch({
      type: "UPDATED_ADD_ASSET_FORM",
      title: e.target.value,
    });
  };

  const handleShowForm = () => {
    dispatch({
      type: "TOGGLED_ADD_ASSET_FORM",
    });
  };

  const handleAddDB = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // use mutate from SWR to make API call
    mutate("/api/asset", async () => {
      const result = await postAssetData({
        title: title,
        collectionRef: state.collection._id,
      });

      // dispatch add asset object from result.data to state
      dispatch({
        type: "ADDED_ASSET",
        asset: { ...result.data },
        assetSort: result.data._id,
      });
    });
    // reset form
    dispatch({
      type: "UPDATED_ADD_ASSET_FORM",
      title: "",
      showForm: false,
    });
    // scroll to bottom of page
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <Section>
      {!showForm && <Button onClick={handleShowForm}>Add New Work</Button>}
      {showForm && (
        <FormWrapper>
          <Title>Add New Work</Title>
          <Form onSubmit={handleAddDB}>
            <Input
              // @ts-ignore
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              minLength="1"
              required
              onChange={handleFormUpdate}
            />
            <FormButton type="submit">Add</FormButton>
          </Form>
          <Footer>
            <UnstyledButton onClick={handleShowForm}>Cancel</UnstyledButton>
          </Footer>
        </FormWrapper>
      )}
    </Section>
  );
};

const Section = styled.section`
  margin-block-start: 1rem;
  margin-block-end: 2rem;
`;

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

export default AddAsset;
