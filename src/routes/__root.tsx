import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import AuthProvider from "../component/auth/AuthContext";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <AuthProvider>
        <Outlet />
        <TanStackRouterDevtools />
      </AuthProvider>
    </React.Fragment>
  );
}
