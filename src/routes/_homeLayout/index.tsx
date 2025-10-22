import { Await, createFileRoute } from "@tanstack/react-router";
import {
  MediaCategoryHeader,
  MediaCategoryLayout,
  MediaContainer,
} from "../../component/MovieCard";
import Hero from "../../component/Hero";
import {
  getAllTrending,
  getPopularMovies,
  getTrendingTV,
  getUpcomingMovies,
  months,
} from "../../api-utils";
import Loading from "../../component/ui/Loading";

//Home Page
export const Route = createFileRoute("/_homeLayout/")({
  component: RouteComponent,

  loader: () => {
    const movieData = Promise.all([
      getAllTrending(),
      getPopularMovies(),
      getUpcomingMovies(),
      getTrendingTV(),
    ]);
    return { deferredSlowData: movieData };
  },
});

function RouteComponent() {
  const { deferredSlowData } = Route.useLoaderData();

  const monthNum = new Date().getMonth();
  return (
    <section className="scroll overflow-y-scroll px-8 py-6 text-white">
      <Await promise={deferredSlowData} fallback={<Loading />}>
        {(data) => {
          return <Hero poster_path={data[2][0].backdrop_path} />;
        }}
      </Await>
      <MediaCategoryLayout>
        <MediaCategoryHeader title="Trending" />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            console.log(data);
            return <MediaContainer items={data[0]} />;
          }}
        </Await>
      </MediaCategoryLayout>
      <MediaCategoryLayout>
        <MediaCategoryHeader title={`Popular movies on ${months[monthNum]}`} />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            console.log(data[1], "popular movies");
            return <MediaContainer items={data[1]} />;
          }}
        </Await>
      </MediaCategoryLayout>
      <MediaCategoryLayout>
        <MediaCategoryHeader title="Upcoming" />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MediaContainer items={data[2]} />;
          }}
        </Await>
      </MediaCategoryLayout>
      <MediaCategoryLayout>
        <MediaCategoryHeader title={"TV Series"} />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MediaContainer items={data[3]} />;
          }}
        </Await>
      </MediaCategoryLayout>
    </section>
  );
}
