import { useRouterState } from "@tanstack/react-router";
import NotFound from "../pageNotFound/PageNotFound";

const DynamicContent: React.FC = () => {
  const path = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <div className="h-full w-full">
      {path === "/home" ? "hello" : <NotFound />}
    </div>
  );
};

export default DynamicContent;
