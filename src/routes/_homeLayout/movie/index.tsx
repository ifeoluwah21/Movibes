import { Await, createFileRoute } from "@tanstack/react-router";
import {
  getAllTrending,
  getPopularMovies,
  getUpcomingMovies,
  months,
} from "../../../api-utils";
import {
  MediaCategoryHeader,
  MediaCategoryLayout,
  MediaContainer,
} from "../../../component/MovieCard";
import Loading from "../../../component/ui/Loading";

export const Route = createFileRoute("/_homeLayout/movie/")({
  component: RouteComponent,
  loader: () => {
    const movieData = Promise.all([
      getAllTrending(),
      getUpcomingMovies(),
      getPopularMovies(),
    ]);
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
            const trendingMovies = data[0].filter(
              (item) => item.media_type === "movie",
            );
            return <MediaContainer items={trendingMovies} />;
          }}
        </Await>
      </MediaCategoryLayout>
      <MediaCategoryLayout>
        <MediaCategoryHeader title="Upcoming" />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MediaContainer items={data[1]} />;
          }}
        </Await>
      </MediaCategoryLayout>
      <MediaCategoryLayout>
        <MediaCategoryHeader title={` Popular movies on ${months[monthNum]}`} />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MediaContainer items={data[2]} />;
          }}
        </Await>
      </MediaCategoryLayout>
    </div>
  );
}
