import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/home/node-with-express-postgres")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
