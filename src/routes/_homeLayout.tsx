import { createFileRoute, Outlet } from "@tanstack/react-router";
import SideNav from "../component/ui/SideNav";

export const Route = createFileRoute("/_homeLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="grid h-screen grid-cols-[226px_auto] text-white">
      <SideNav />
      <Outlet />
    </main>
  );
}
