import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/home/node-with-express-postgres/$id")({
  component: NodePage,
});

function NodePage() {
  const { id } = Route.useParams();

  return (
    <div>
      <h1>Node ID: {id}</h1>
    </div>
  );
}
