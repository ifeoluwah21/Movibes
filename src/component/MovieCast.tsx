import React from "react";
import type { MediaCredits } from "../api-utils";

const Cast: React.FC<{
  profile_path: string;
  name: string;
  character: string;
}> = ({ profile_path, name, character }) => {
  return (
    <article className="w-max space-y-0.5 text-center">
      <figure className="h-[150px] w-[150px] rounded-full bg-sky-100">
        <img
          src={`https://image.tmdb.org/t/p/w185/${profile_path}`}
          className="h-[150px] w-[150px] rounded-full object-contain"
          alt=""
        />
      </figure>
      <p className="mt-4">{name}</p>
      <p className="text-gray-150">{character}</p>
    </article>
  );
};
const MovieCast: React.FC<MediaCredits> = ({ cast }) => {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Top Cast</h2>
      <div className="scroll flex gap-24 overflow-x-scroll">
        {cast.slice(0, 5).map((credit) => (
          <Cast
            key={credit.id}
            profile_path={credit.profile_path}
            name={credit.name}
            character={credit.character}
          />
        ))}
      </div>
    </section>
  );
};

export default MovieCast;
