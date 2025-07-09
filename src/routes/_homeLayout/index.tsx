import { Await, createFileRoute } from "@tanstack/react-router";
import {
  MovieCategoryHeader,
  MovieCategoryLayout,
  MovieContainer,
} from "../../component/MovieCard";
import Hero from "../../component/Hero";
import {
  getAllTrending,
  getPopular,
  getUpcoming,
  months,
} from "../../api-utils";
import Loading from "../../component/ui/Loading";
export const Route = createFileRoute("/_homeLayout/")({
  component: RouteComponent,

  loader: () => {
    const movieData = Promise.all([
      getAllTrending("movie"),
      getAllTrending("tv"),
      getUpcoming(),
      getPopular(),
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
      <MovieCategoryLayout>
        <MovieCategoryHeader title="Trending" />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MovieContainer items={data[0]} />;
          }}
        </Await>
      </MovieCategoryLayout>
      <MovieCategoryLayout>
        <MovieCategoryHeader title="TV Series" />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MovieContainer items={data[1]} />;
          }}
        </Await>
      </MovieCategoryLayout>
      <MovieCategoryLayout>
        <MovieCategoryHeader title="Upcoming" />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MovieContainer items={data[2]} />;
          }}
        </Await>
      </MovieCategoryLayout>
      <MovieCategoryLayout>
        <MovieCategoryHeader title={` Popular movies on ${months[monthNum]}`} />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MovieContainer items={data[3]} />;
          }}
        </Await>
      </MovieCategoryLayout>
    </section>
  );
}
