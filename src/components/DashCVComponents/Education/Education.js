import EducationForm from "@/components/DashCVComponents/EducationForm";

const Education = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <EducationForm key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Education;
