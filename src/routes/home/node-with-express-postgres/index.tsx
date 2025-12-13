import { createFileRoute } from "@tanstack/react-router";
import NodeWithPostgres from "../../../components/content/nodeWithPostgres/NodeWithPostgres";

export const Route = createFileRoute("/home/node-with-express-postgres/")({
  component: NodeWithPostgres,
});
