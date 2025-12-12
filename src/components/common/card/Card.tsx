import { Link } from "@tanstack/react-router";

interface Props {
  index: string;
  title: string;
  path: string;
}
const Card: React.FC<Props> = ({ index, title, path }) => {
  return (
    <div className="bg-white rounded-lg p-5 hover:shadow-lg transition border border-gray-300 flex justify-between">
      <div className="font-medium"> 
        {index}
        {""} {title}
      </div>
      <Link to={path} className="text-blue-600">Jump to</Link>
    </div>
  );
};
export default Card;
