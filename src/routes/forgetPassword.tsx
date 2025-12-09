import { createFileRoute } from "@tanstack/react-router";
import ForgotPassword from "../components/forgetPassword/ForgetPassword";

export const Route = createFileRoute("/forgetPassword")({
  component: ForgotPassword,
});
