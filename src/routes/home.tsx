import { createFileRoute } from "@tanstack/react-router";
import Sidebar from "../components/sidebar/Sidebar";

export const Route = createFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <main>
        <Sidebar />
      </main>
    </div>
  );
}
