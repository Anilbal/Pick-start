import { createFileRoute, Outlet } from "@tanstack/react-router";
import Sidebar from "../components/sidebar/Sidebar";

export const Route = createFileRoute("/home")({
  component: HomeLayout,
});

function HomeLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="bg-gray-50 w-4/5 h-[calc(100vh-56px)] mt-14">
        <Outlet />
      </main>
    </div>
  );
}
