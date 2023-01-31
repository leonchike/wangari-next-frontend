import EducationForm from "@/components/DashCVComponents/EducationForm";

import { useCVState } from "@/context/adminCVContext";
import NewItem from "@/components/DashCVComponents/NewItem";

const Education = () => {
  const state = useCVState();
  // filter for state.cv.type === education
  const data = state.cv.filter((item) => item.type === "education");

  return (
    <div>
      <div>
        {data.map((item) => (
          <EducationForm key={item._id} data={item} />
        ))}
      </div>
      <NewItem type="education" />
    </div>
  );
};

export default Education;
