import { FaStar } from "react-icons/fa";
import type { MediaItem } from "../api-utils";
import type { PropsWithChildren } from "react";
import { useNavigate } from "@tanstack/react-router";

export const MediaCard: React.FC<{ media: MediaItem }> = ({ media }) => {
  const navigate = useNavigate();
  const { media_type, id, vote_average, poster_path } = media;
  const name = media_type === "movie" ? media.title : media.name;
  return (
    <article className="relative w-[185px]">
      <button
        type="button"
        className="cursor-pointer"
        onClick={() => {
          console.log(id);
          navigate({ to: `/${media_type}/${id}` });
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

export const MediaContainer: React.FC<{
  items: MediaItem[];
  type?: "movie" | "tv";
}> = ({ items }) => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-x-6 gap-y-12">
      {items.map((item) => {
        return <MediaCard key={item.id} media={item} />;
      })}
    </div>
  );
};

export const MediaCategoryHeader: React.FC<{ title: string }> = ({ title }) => {
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

export const MediaCategoryLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <section className="py-8">{children}</section>;
};
