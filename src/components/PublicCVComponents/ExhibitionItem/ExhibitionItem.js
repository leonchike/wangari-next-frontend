import { CVContent } from "@/styles/reusableStyles";

const ExhibitionItem = ({ data }) => {
  return (
    <div>
      <CVContent>
        {data.title}
        {data.status === "upcoming" ? <span> - [{data.status}]</span> : null}
      </CVContent>
    </div>
  );
};

export default ExhibitionItem;
