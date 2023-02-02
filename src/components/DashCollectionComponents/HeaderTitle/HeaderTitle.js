import { useEffect, useState } from "react";
import styled from "styled-components";

import { useCollectionUpdate } from "@/context/adminCollectionContext";

const HeaderTitle = ({ id, title, dispatch }) => {
  const updateCollectionData = useCollectionUpdate();
  const [collectionName, setCollectionName] = useState(title);

  useEffect(() => {
    setCollectionName(title);
  }, [title]);

  const updateName = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    //update state
    dispatch({
      type: "UPDATED_COLLECTION",
      [name]: value,
    });

    // update database
    updateCollectionData(id, { name: value });
  };

  return (
    <>
      <div>Collection</div>
      <StyledInput
        type="text"
        placeholder="Collection Name"
        value={collectionName}
        maxLength="60"
        required
        onChange={(e) => setCollectionName(e.target.value)}
        onBlur={updateName}
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
