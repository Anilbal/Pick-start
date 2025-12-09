import { createFileRoute } from "@tanstack/react-router";
import Sidebar from "../components/sidebar/Sidebar";
import DynamicContent from "../components/content/DynamicContent";

export const Route = createFileRoute("/home")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-gray-50 w-4/5 h-[calc(100vh-56px)] mt-14">
        <DynamicContent />
      </main>
    </div>
  );
}
