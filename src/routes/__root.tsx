import * as React from "react";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { User } from "firebase/auth";
// import AuthProvider from "../component/auth/AuthContext";
interface AuthRouteContext {
  user: User | null;
}
export const Route = createRootRouteWithContext<AuthRouteContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
