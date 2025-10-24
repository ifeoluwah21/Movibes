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
    <section className="scroll md:w-9/10 overflow-y-scroll px-4 py-6 text-white md:mx-auto md:min-w-[526px] md:max-w-[768px] md:px-8 lg:max-w-[980px]">
      <Await promise={deferredSlowData} fallback={<Loading />}>
        {(data) => {
          return <Hero poster_path={data[2][0].backdrop_path} />;
        }}
      </Await>
      <MediaCategoryLayout>
        <MediaCategoryHeader title="Trending" />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MediaContainer items={data[0]} />;
          }}
        </Await>
      </MediaCategoryLayout>
      <MediaCategoryLayout>
        <MediaCategoryHeader title={`Popular movies on ${months[monthNum]}`} />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
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
