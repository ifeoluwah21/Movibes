import type { FC } from "react";
import type { MediaType, MediaCast, Info } from "../api-utils";

const AboutMovie: FC<{
  media_type: MediaType;
  title: string;
  releaseDate: number;
  runtime: number;
  overview: string;
  director_name: string;
  writers: string[];
  stars: MediaCast[];
  genres: Info[];
  production_companies: Info[];
}> = ({
  title,
  releaseDate,
  media_type,
  runtime,
  overview,
  director_name,
  writers,
  stars,
  genres,
  production_companies,
}) => {
  return (
    <section className="mb-6">
      <div className="block gap-3.5 space-x-4 space-y-3 text-xl font-medium md:flex">
        <h1>{title}</h1>
        <span>{releaseDate}</span>
        <span>PG-13</span>
        {media_type === "movie" ? <span>{runtime} mins</span> : null}
      </div>
      <p className="border-white-100/25 border-b-[1px] py-4 text-justify">
        {overview}
      </p>
      <p className="border-white-100/25 border-b-[1px] py-4">
        Genres :{" "}
        <span className="text-sky-50">
          {genres.map((genre) => genre.name).join(", ")}
        </span>
      </p>
      <p className="border-white-100/25 border-b-[1px] py-4">
        Production :{" "}
        <span className="text-sky-50">
          {production_companies.map((genre) => genre.name).join(", ")}
        </span>
      </p>
      <p className="border-white-100/25 border-b-[1px] py-4">
        Director : <span className="text-sky-50">{director_name}</span>
      </p>
      {media_type === "movie" ? (
        <p className="border-white-100/25 border-b-[1px] py-4">
          Writer : <span className="text-sky-50">{writers.join(", ")}</span>
        </p>
      ) : null}
      <p className="border-white-100/25 border-b-[1px] py-4">
        Stars :{" "}
        <span className="text-sky-50">
          {stars
            .slice(0, 3)
            .map((star) => star.name)
            .join(", ")}
        </span>
      </p>
    </section>
  );
};

export default AboutMovie;
