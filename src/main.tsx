// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { routeTree } from "./routeTree.gen.ts";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { useAuth } from "./component/auth/useAuth.tsx";
import AuthProvider from "./component/auth/AuthContext.tsx";

const router = createRouter({ routeTree, context: { user: undefined! } });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>,
  // {/* </StrictMode>, */}
);
export function App() {
  const user = useAuth();
  return <RouterProvider router={router} context={{ user }} />;
}
