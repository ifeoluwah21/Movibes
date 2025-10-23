import { Await, createFileRoute } from "@tanstack/react-router";
import Hero from "../../../component/Hero";
import {
  getMediaCredits,
  getMediaDetails,
  type MediaCredits,
  type MovieDetail,
} from "../../../api-utils";
import AboutMovie from "../../../component/AboutMovie";
import MovieCast from "../../../component/MovieCast";
import LogoSpinner from "../../../component/ui/LogoSpinner";

export const Route = createFileRoute("/_homeLayout/movie/$movieId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    console.log(params.movieId);
    const deferredSlowData = Promise.all([
      getMediaDetails("movie", +params.movieId),
      getMediaCredits("movie", +params.movieId),
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
          const [movieDetails, movieCredits] = data as [
            MovieDetail,
            MediaCredits,
          ];
          const director = movieCredits.crew.find(
            (crew) => crew.job.toLowerCase() === "director",
          );
          const writers = movieCredits.crew
            .filter((crew) => crew.department.toLowerCase() === "writing")
            .map((writer) => writer.original_name);
          console.log(director, writers);
          const releaseDate = new Date(movieDetails.release_date);
          return (
            <>
              <Hero poster_path={movieDetails.backdrop_path} />
              <AboutMovie
                media_type="movie"
                stars={movieCredits.cast}
                title={movieDetails.original_title}
                genres={movieDetails.genres}
                production_companies={movieDetails.production_companies}
                runtime={movieDetails.runtime}
                releaseDate={releaseDate.getFullYear()}
                director_name={director?.name || ""}
                writers={writers}
                overview={movieDetails.overview}
              />
              <MovieCast {...movieCredits} />
            </>
          );
        }}
      </Await>
    </section>
  );
}
