import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_homeLayout/upcoming")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_homeLayout/upcoming"!</div>;
}
