import { CVHeading, CVContent } from "@/styles/reusableStyles";

const Education = ({ data }) => {
  return (
    <div>
      <CVHeading>Education</CVHeading>
      {data.map((item) => (
        <div key={item._id}>
          <CVContent>{item.title}</CVContent>
        </div>
      ))}
    </div>
  );
};

export default Education;
