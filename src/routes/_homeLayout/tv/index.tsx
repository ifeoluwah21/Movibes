import { Await, createFileRoute } from "@tanstack/react-router";
import { getAllTrending, getPopularMovies, months } from "../../../api-utils";
import {
  MediaCategoryHeader,
  MediaCategoryLayout,
  MediaContainer,
} from "../../../component/MovieCard";
import Loading from "../../../component/ui/Loading";

export const Route = createFileRoute("/_homeLayout/tv/")({
  component: RouteComponent,
  loader: () => {
    const movieData = Promise.all([getAllTrending("tv"), getPopularMovies()]);
    return { deferredSlowData: movieData };
  },
});

function RouteComponent() {
  const { deferredSlowData } = Route.useLoaderData();

  const monthNum = new Date().getMonth();
  return (
    <div className="scroll overflow-y-scroll px-8 py-6 text-white">
      <MediaCategoryLayout>
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MediaContainer type={"tv"} items={data[0]} />;
          }}
        </Await>
      </MediaCategoryLayout>
      <MediaCategoryLayout>
        <MediaCategoryHeader
          title={` Popular TV series on ${months[monthNum]}`}
        />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MediaContainer type={"tv"} items={data[1]} />;
          }}
        </Await>
      </MediaCategoryLayout>
    </div>
  );
}
