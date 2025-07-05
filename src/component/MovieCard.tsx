import { FaStar } from "react-icons/fa";
import type { Trending } from "../api-utils";
import type { PropsWithChildren } from "react";

export const MovieCard: React.FC<{ [K in keyof Trending]: Trending[K] }> = ({
  name,
  vote_average,
  poster_path,
  id,
}) => {
  return (
    <article className="relative w-[185px]">
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => {
          console.log(id);
        }}
      >
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
      </button>
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

export const MovieCategoryHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="mb-8 flex justify-between">
      <h2 className="text-white-100 text-2xl font-semibold">{title}</h2>
      <button
        type="button"
        className="text-gray-150 cursor-pointer text-base font-semibold"
      >
        See all
      </button>
    </div>
  );
};

export const MovieCategoryLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <section className="p-8">{children}</section>;
};
