import { useRouterState } from "@tanstack/react-router";
import NotFound from "../pageNotFound/PageNotFound";
import TechList from "./techList/TechList";

const MainContent: React.FC = () => {
  const path = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <div className="h-full w-full">
      {path === "/home" ? <TechList /> : <NotFound />}
    </div>
  );
};

export default MainContent;
