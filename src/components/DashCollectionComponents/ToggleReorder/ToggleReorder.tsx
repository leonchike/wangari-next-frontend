import {
  useCollectionDispatch,
  useCollectionState,
  useCollectionUpdate,
} from "@/context/adminCollectionContext";

const ToggleReorder = () => {
  const dispatch = useCollectionDispatch();
  const state = useCollectionState();
  const updateCollectionData = useCollectionUpdate();

  const handleClick = () => {
    // @ts-ignore
    dispatch({ type: "TOGGLE_REORDER" });
  };

  const handleSaveOrder = () => {
    // @ts-ignore
    dispatch({ type: "TOGGLE_REORDER" });

    // API call to update assetSort
    try {
      // @ts-ignore
      updateCollectionData(state.collection._id, {
        assetSort: state.assetSort,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {state.assetSort.length > 1 && (
        <>
          {state.reorderable === false && (
            <button onClick={handleClick}>Reorder</button>
          )}
          {state.reorderable === true && (
            <button onClick={handleSaveOrder}>Save Order</button>
          )}
        </>
      )}
    </>
  );
};

export default ToggleReorder;
