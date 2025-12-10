import TechCard from "./Card";
import { TechStackList } from "./TechListData";

const TechList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {TechStackList.map((item, index) => (
        <TechCard key={index} {...item} />
      ))}
    </div>
  );
};

export default TechList;
