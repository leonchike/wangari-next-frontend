import YearContainer from "@/components/PublicCVComponents/YearContainer";
import { CVHeading } from "@/styles/reusableStyles";

const Exhibition = ({ category, data }) => {
  if (!data) {
    return null;
  }

  const yearsSet = new Set();
  data.forEach((item) => {
    if (item.year === "") {
      item.year = 0;
    }
    yearsSet.add(Number(item.year));
  });
  const years = [...yearsSet];
  years.sort((a, b) => b - a);

  let title;
  switch (category) {
    case "solo":
      title = "Solo Exhibitions";
      break;
    case "group":
      title = "Selected Group Exhibitions and Fairs";
      break;
    default:
      title = "Exhibitions";
  }

  return (
    <div className="cv-section-container">
      <CVHeading className="cv-category-title">{title}</CVHeading>
      {years.map((year) => {
        const exhibitions = data.filter((item) => Number(item.year) === year);
        return (
          <YearContainer key={year} year={year} exhibitions={exhibitions} />
        );
      })}
    </div>
  );
};

export default Exhibition;
