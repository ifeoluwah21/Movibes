import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_homeLayout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="text-white">Hello "/_homeLayout/ index"!</div>;
}
