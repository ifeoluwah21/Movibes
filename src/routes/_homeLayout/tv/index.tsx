import { Await, createFileRoute } from "@tanstack/react-router";
import { getAllTrending, getPopular, months } from "../../../api-utils";
import {
  MovieCategoryHeader,
  MovieCategoryLayout,
  MovieContainer,
} from "../../../component/MovieCard";
import Loading from "../../../component/ui/Loading";

export const Route = createFileRoute("/_homeLayout/tv/")({
  component: RouteComponent,
  loader: () => {
    const movieData = Promise.all([getAllTrending("tv"), getPopular("tv")]);
    return { deferredSlowData: movieData };
  },
});

function RouteComponent() {
  const { deferredSlowData } = Route.useLoaderData();

  const monthNum = new Date().getMonth();
  return (
    <div className="scroll overflow-y-scroll px-8 py-6 text-white">
      <MovieCategoryLayout>
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MovieContainer type={"tv"} items={data[0]} />;
          }}
        </Await>
      </MovieCategoryLayout>
      <MovieCategoryLayout>
        <MovieCategoryHeader
          title={` Popular TV series on ${months[monthNum]}`}
        />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MovieContainer type={"tv"} items={data[1]} />;
          }}
        </Await>
      </MovieCategoryLayout>
    </div>
  );
}
