import styled from "styled-components";

import {
  useCollectionDispatch,
  useCollectionState,
  useCollectionUpdate,
} from "@/context/adminCollectionContext";

const HeaderTitle = () => {
  const updateCollectionData = useCollectionUpdate();
  const dispatch = useCollectionDispatch();
  const state = useCollectionState();
  const title = state.collection.name;
  const id = state.collection._id;

  const updateState = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "UPDATED_COLLECTION",
      name: value,
    });
  };

  const updateDB = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    // update database
    updateCollectionData(id, { [name]: value });
  };

  return (
    <>
      <div>Collection</div>
      <StyledInput
        type="text"
        placeholder="Collection Name"
        name="name"
        value={title}
        maxLength="60"
        required
        onChange={updateState}
        onBlur={updateDB}
      />
    </>
  );
};

const StyledInput = styled.input`
  border: none;
  font-size: 1.5rem;
  font-weight: var(--font-weight-normal);
  color: var(--color-offblack);
  display: block;
  width: 100%;
  padding: 0;
  border-bottom: 2px solid transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid var(--color-offblack);
  }
`;

export default HeaderTitle;
