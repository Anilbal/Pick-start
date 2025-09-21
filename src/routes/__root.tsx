import * as React from "react";
import {
  Outlet,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";
import Navbar from "../components/elements/navbar/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { location } = useRouterState();

  const hideOnPaths = ["/login", "/register"];

  const shouldShowNavbar = !hideOnPaths.includes(location.pathname);
  return (
    <React.Fragment>
      {shouldShowNavbar && <Navbar />}
      <Outlet />
    </React.Fragment>
  );
}
