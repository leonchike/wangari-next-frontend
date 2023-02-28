import { useCollectionDispatch } from "@/context/adminCollectionContext";

const ToggleReorder = () => {
  const dispatch = useCollectionDispatch();

  const handleClick = () => {
    // @ts-ignore
    dispatch({ type: "TOGGLE_REORDER" });
  };

  return <button onClick={handleClick}>Toggle Reorder</button>;
};

export default ToggleReorder;
