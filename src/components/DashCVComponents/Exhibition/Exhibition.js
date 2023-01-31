import { useCVState } from "@/context/adminCVContext";
import NewItem from "@/components/DashCVComponents/NewItem";
import ExhibitionForm from "@/components/DashCVComponents/ExhibitionForm";

const Exhibition = ({ type }) => {
  const state = useCVState();
  // filter for state.cv.type based on props.type
  const data = state.cv.filter((item) => item.type === type);

  return (
    <div>
      <div>
        {data.map((item) => (
          <ExhibitionForm key={item._id} data={item} />
        ))}
      </div>
      <NewItem type={type} />
    </div>
  );
};

export default Exhibition;
