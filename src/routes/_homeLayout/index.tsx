import { createFileRoute } from "@tanstack/react-router";
import { MovieContainer } from "../../component/MovieCard";
import Hero from "../../component/Hero";

export const Route = createFileRoute("/_homeLayout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="scroll overflow-y-scroll text-white">
      <Hero />
      <MovieContainer />
    </div>
  );
}
