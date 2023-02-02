import styled from "styled-components";

// State and API
import {
  useCollectionDispatch,
  useCollectionState,
  useCollectionUpdate,
} from "@/context/adminCollectionContext";

// Components
import Input from "@/components/Input";

const StorySection = () => {
  const updateCollectionData = useCollectionUpdate();
  const dispatch = useCollectionDispatch();
  const state = useCollectionState();

  const id = state.collection._id;
  const story = state.collection.notes;

  const updateState = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "UPDATED_COLLECTION",
      [name]: value,
    });
  };

  const updateDB = (e) => {
    const { name, value } = e.target;

    updateCollectionData(id, { [name]: value });
  };

  return (
    <Wrapper>
      <Heading>Story</Heading>
      <StyledInput
        type="textarea"
        name="notes"
        value={story}
        onChange={updateState}
        onBlur={updateDB}
        placeholder="Add a story to describe this collection. This will be included in the collection's page."
        rows="5"
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-block-start: 1.5rem;
`;

const Heading = styled.h3``;

const StyledInput = styled(Input)`
  resize: vertical;
`;

export default StorySection;
