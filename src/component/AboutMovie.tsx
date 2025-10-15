import type { FC } from "react";
import type { MovieCast } from "../api-utils";

const AboutMovie: FC<{
  type: "movie" | "tv";
  title: string;
  releaseDate: number;
  runtime: number;
  overview: string;
  director_name: string;
  writers: string[];
  stars: MovieCast[];
}> = ({
  title,
  releaseDate,
  type,
  runtime,
  overview,
  director_name,
  writers,
  stars,
}) => {
  return (
    <section className="mb-6">
      <div className="flex gap-3.5 text-xl font-medium">
        <h1>{title}</h1>
        <span>{releaseDate}</span>
        <span>PG-13</span>
        {type === "movie" ? <span>{runtime} mins</span> : null}
      </div>
      <p className="border-white-100/25 border-b-[1px] py-4 text-justify">
        {overview}
      </p>
      <p className="border-white-100/25 border-b-[1px] py-4">
        Director : <span className="text-sky-50">{director_name}</span>
      </p>
      {type === "movie" ? (
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
