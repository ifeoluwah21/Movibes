import { Await, createFileRoute } from "@tanstack/react-router";
import Hero from "../../../component/Hero";
import {
  getMediaCredits,
  getMediaDetails,
  type MediaCredits,
  type TvDetails,
} from "../../../api-utils";
import AboutMovie from "../../../component/AboutMovie";
import MovieCast from "../../../component/MovieCast";
import LogoSpinner from "../../../component/ui/LogoSpinner";

export const Route = createFileRoute("/_homeLayout/tv/$tvId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const deferredSlowData = Promise.all([
      getMediaDetails("tv", +params.tvId),
      getMediaCredits("tv", +params.tvId),
    ]);
    return {
      deferredSlowData,
    };
  },
});

function RouteComponent() {
  const { deferredSlowData } = Route.useLoaderData();

  return (
    <section className="font-Poppins scroll overflow-y-scroll px-10 py-4">
      <Await promise={deferredSlowData} fallback={<LogoSpinner />}>
        {(data) => {
          const [tvDetails, tvCredits] = data as [TvDetails, MediaCredits];
          const director = tvDetails.created_by.map((i) => i.name);
          const writers = tvCredits.crew
            .filter((crew) => crew.department.toLowerCase() === "writing")
            .map((writer) => writer.original_name);
          const releaseDate = new Date(tvDetails.first_air_date);
          return (
            <>
              <Hero poster_path={tvDetails.backdrop_path} />
              <AboutMovie
                genres={tvDetails.genres}
                production_companies={tvDetails.production_companies}
                media_type="tv"
                stars={tvCredits.cast}
                title={tvDetails.name}
                runtime={0}
                releaseDate={releaseDate.getFullYear()}
                director_name={director.join(", ") || ""}
                writers={writers}
                overview={tvDetails.overview}
              />
              <MovieCast {...tvCredits} />
            </>
          );
        }}
      </Await>
    </section>
  );
}
