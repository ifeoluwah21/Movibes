import { FaStar } from "react-icons/fa";
import type { Trending } from "../api-utils";

export const MovieCard: React.FC<{
  poster_path: string;
  name: string;
  vote_average: number;
}> = ({ name, vote_average, poster_path }) => {
  return (
    <article className="relative w-[185px]">
      <img
        src={`https://image.tmdb.org/t/p/w185${poster_path}`}
        width={185}
        height={278}
        className="rounded-[20px]"
        alt=""
      />
      <div className="bg-black-100/25 absolute right-0 top-0 flex items-center gap-x-1 rounded-bl-[20px] px-2.5 py-1.5">
        <FaStar className="fill-amber-400" />
        <span>{vote_average.toFixed(1)}</span>
      </div>
      <p className="sr-only">{name}</p>
    </article>
  );
};

export const MovieContainer: React.FC<{ items: Trending[] }> = ({ items }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-x-6 gap-y-12">
      {items.map((item) => {
        return <MovieCard key={item.id} {...item} />;
      })}
    </div>
  );
};
