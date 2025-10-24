import { Await, createFileRoute } from "@tanstack/react-router";
import { getPopularTV, getTrendingTV, months } from "../../../api-utils";
import {
  MediaCategoryHeader,
  MediaCategoryLayout,
  MediaContainer,
} from "../../../component/MovieCard";
import Loading from "../../../component/ui/Loading";

export const Route = createFileRoute("/_homeLayout/tv/")({
  component: RouteComponent,
  loader: () => {
    const movieData = Promise.all([getTrendingTV(), getPopularTV()]);
    return { deferredSlowData: movieData };
  },
});

function RouteComponent() {
  const { deferredSlowData } = Route.useLoaderData();

  const monthNum = new Date().getMonth();
  return (
    <div className="scroll md:w-9/10 overflow-y-scroll px-8 py-6 text-white md:mx-auto md:min-w-[526px] md:max-w-[768px] md:px-8 lg:max-w-[980px]">
      <MediaCategoryLayout>
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MediaContainer items={data[0]} />;
          }}
        </Await>
      </MediaCategoryLayout>
      <MediaCategoryLayout>
        <MediaCategoryHeader
          title={` Popular TV series on ${months[monthNum]}`}
        />
        <Await promise={deferredSlowData} fallback={<Loading />}>
          {(data) => {
            return <MediaContainer items={data[1]} />;
          }}
        </Await>
      </MediaCategoryLayout>
    </div>
  );
}
