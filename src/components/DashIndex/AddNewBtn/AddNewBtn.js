import { useState } from "react";
import styled from "styled-components";

import AddModal from "@/components/DashIndex/AddModal";

//reducer and api
import { useDashboardDispatch } from "@/context/adminDashboardContext";
import { postCollectionData } from "@/hooks/useCollectionsData";

const AddNewBtn = () => {
  const dispatch = useDashboardDispatch();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");

  const handleAddNew = (e) => {
    e.preventDefault();
    const data = {
      name,
      liveStatus: true,
      newStatus: true,
    };
    setShowModal(false);
    postCollectionData(data).then((res) => {
      console.log(res);
      dispatch({
        type: "ADDED_COLLECTION",
        collection: res.data,
        collectionSort: res.data._id,
      });
    });
  };

  return (
    <>
      <Article onClick={() => setShowModal(true)}>
        <Container>+ Add a New Collection</Container>
      </Article>
      {showModal && (
        <AddModal
          isOpen={showModal}
          onDismiss={() => setShowModal(false)}
          setName={setName}
          handleAddNew={handleAddNew}
        />
      )}
    </>
  );
};

const Article = styled.article`
  display: grid;
  place-content: center;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  padding: 1.5rem;
  min-height: 145px;
  border: 3px solid transparent;
  color: hsl(0deg 0 0);
  background-color: hsl(0deg 0% 0% / 0.1);
  cursor: pointer;

  &:hover,
  &focus {
    border: 3px solid var(--color-offblack);
  }
`;

const Container = styled.div`
  font-size: 1.2rem;
  font-weight: var(--font-weight-bold);
`;

export default AddNewBtn;
