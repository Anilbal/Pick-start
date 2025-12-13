import { useRouterState } from "@tanstack/react-router";
import type { JSX } from "react";
import EnvironmentSetUp from "./environmentSetUp";
import NotFound from "../../../pageNotFound/PageNotFound";

const itemMap: Record<string, JSX.Element> = {
  "1.1": <EnvironmentSetUp />,
  "1.2": <EnvironmentSetUp />,
  "1.3": <EnvironmentSetUp />,
};

const NodeWithPostgresDynmamicContent: React.FC = () => {
  const path = useRouterState({
    select: (state) => state.location.pathname,
  }).split("/");
  const id = path[path.length - 1];
  return itemMap[id ?? ""] ?? <NotFound />;
};

export default NodeWithPostgresDynmamicContent;
