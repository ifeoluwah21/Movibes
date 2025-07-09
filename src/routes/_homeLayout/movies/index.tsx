import { Await, createFileRoute } from "@tanstack/react-router";
import {
  getAllTrending,
  getPopular,
  getUpcoming,
  months,
} from "../../../api-utils";
import {
  MovieCategoryHeader,
  MovieCategoryLayout,
  MovieContainer,
} from "../../../component/MovieCard";
import Loading from "../../../component/ui/Loading";

export const Route = createFileRoute("/_homeLayout/movies/")({
  component: RouteComponent,
  loader: ({ context }) => {
    console.log(context);
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
    <div className="scroll overflow-y-scroll text-white">
      <MovieCategoryLayout>
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
    </div>
  );
}
