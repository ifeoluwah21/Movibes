import { Await, createFileRoute } from "@tanstack/react-router";
import Hero from "../../../component/Hero";
import { getDetails, getMovieCredits } from "../../../api-utils";
import AboutMovie from "../../../component/AboutMovie";
import MovieCast from "../../../component/MovieCast";
import LogoSpinner from "../../../component/ui/LogoSpinner";

export const Route = createFileRoute("/_homeLayout/tv/$tvId")({
  component: RouteComponent,
  loader: async ({ params }) => {
    console.log(params.tvId);
    const deferredSlowData = Promise.all([
      getDetails("tv", +params.tvId),
      getMovieCredits("tv", +params.tvId),
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
          console.log(data);
          const director = movieDetails.created_by.map((i) => i.name);
          const writers = movieCredits.crew
            .filter((crew) => crew.department.toLowerCase() === "writing")
            .map((writer) => writer.original_name);
          console.log(director, writers);
          const releaseDate = new Date(movieDetails.first_air_date);
          return (
            <>
              <Hero poster_path={movieDetails.backdrop_path} />
              <AboutMovie
                type="tv"
                stars={movieCredits.cast}
                title={movieDetails.name}
                runtime={movieDetails.runtime}
                releaseDate={releaseDate.getFullYear()}
                director_name={director.join(", ") || ""}
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
