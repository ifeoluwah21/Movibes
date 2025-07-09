import { Await, createFileRoute } from "@tanstack/react-router";
import Hero from "../../../component/Hero";
import { getDetails, getMovieCredits } from "../../../api-utils";
import AboutMovie from "../../../component/AboutMovie";
import MovieCast from "../../../component/MovieCast";
import LogoSpinner from "../../../component/ui/LogoSpinner";

export const Route = createFileRoute("/_homeLayout/movies/$movieId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    console.log(params.movieId);
    const deferredSlowData = Promise.all([
      getDetails("movie", +params.movieId),
      getMovieCredits("movie", +params.movieId),
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
          const [movieDetails, movieCredits] = data;
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
                stars={movieCredits.cast}
                title={movieDetails.original_title}
                runtime={movieDetails.runtime}
                releaseDate={releaseDate.getFullYear()}
                director_name={director?.name || ""}
                writers={writers}
                overview={movieDetails.overview}
              />
              <MovieCast credits={movieCredits} />
            </>
          );
        }}
      </Await>
    </section>
  );
}
