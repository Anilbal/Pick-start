import { BackendConstants } from "../../../constants/Backend";
import Card from "../../common/card/Card";

const NodeWithPostgres: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-medium underline">Overview:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {BackendConstants.map((item,index)=>(
            <Card index={`1.${index+1}`} title={item} path="" />
        ))}
      </div>
    </div>
  );
};
export default NodeWithPostgres;
