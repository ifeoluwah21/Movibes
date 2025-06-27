import React from "react";
import { FaStar } from "react-icons/fa";

export const MovieCard: React.FC = () => {
  return (
    <article className="relative w-[185px]">
      <img
        src="https://image.tmdb.org/t/p/w185/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg"
        width={185}
        height={278}
        className="rounded-[20px]"
        alt=""
      />
      <div className="bg-black-100/25 absolute right-0 top-0 flex items-center gap-x-1 rounded-bl-[20px] px-2.5 py-1.5">
        <FaStar className="fill-amber-400" />
        <span>8.8</span>
      </div>
      <p className="sr-only">The movies</p>
    </article>
  );
};

export const MovieContainer: React.FC = () => {
  const arr = new Array(20).fill(2);
  return (
    <section className="flex flex-row flex-wrap justify-between gap-x-6 gap-y-12 p-8">
      {arr.map((value, i) => {
        return <MovieCard key={i} />;
      })}
    </section>
  );
};
