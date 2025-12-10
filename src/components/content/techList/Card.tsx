import type { Props } from "./TechListData";

const TechCard: React.FC<Props> = ({
  logo,
  title,
  techList,
  description,
  path,
}) => {
  return (
    <div className="bg-white rounded-lg p-5 hover:shadow-lg transition border border-gray-300 h-[260px]">
      {/* Logo + Title */}
      <div className="flex items-center gap-3 mb-3">
        <div className="h-16 min-w-20 border border-gray-300 rounded-lg">
          <img
            src={logo}
            alt={title}
            className="w-full h-full rounded-md object-contain"
          />
        </div>
        <div>
          <h2 className="text-lg font-medium">{title}</h2>
          <p className="text-sm text-gray-500">{techList}</p>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-4">{description}</p>

      {/* Footer */}
      <div className="flex justify-between items-center text-sm">
        <p className="text-gray-400">Installed times</p>

        <a href={path} className="text-blue-600 font-medium hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default TechCard;
