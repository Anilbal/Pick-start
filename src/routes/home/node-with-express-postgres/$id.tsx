import { createFileRoute } from "@tanstack/react-router";
import NodeWithPostgresDynmamicContent from "../../../components/content/nodeWithPostgres/contentList/NodeWithPostgresList";

export const Route = createFileRoute("/home/node-with-express-postgres/$id")({
  component: NodeWithPostgresDynmamicContent,
});
