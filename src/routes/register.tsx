import { createFileRoute } from "@tanstack/react-router";
import Register from "../components/pages/register/Register";

export const Route = createFileRoute("/register")({
  component: Register,
});
