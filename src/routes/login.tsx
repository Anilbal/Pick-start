import { createFileRoute } from "@tanstack/react-router";
import Login from "../components/pages/login/Login";

export const Route = createFileRoute("/login")({
  component: Login,
});
