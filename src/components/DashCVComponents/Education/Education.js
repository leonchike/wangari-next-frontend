import EducationForm from "@/components/DashCVComponents/EducationForm";

import { useCVState } from "@/context/adminCVContext";

const Education = () => {
  const state = useCVState();
  // filter for state.cv.type === education
  const data = state.cv.filter((item) => item.type === "education");

  return (
    <div>
      {data.map((item) => (
        <EducationForm key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Education;
