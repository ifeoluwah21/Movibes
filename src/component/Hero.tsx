import React from "react";
import { BsFillInfoCircleFill, BsPlayFill } from "react-icons/bs";

const Hero: React.FC<{ poster_path: string }> = ({ poster_path }) => {
  return (
    <article className="py-6">
      <figure className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w780/${poster_path}`}
          // width="780"
          // height="439"
          className="h-[500px] w-full rounded-[20px] object-cover object-center"
          alt=""
        />
        <div className="absolute bottom-6 right-6 flex items-center gap-4">
          <button
            type="button"
            className="bg-white-100/10 flex cursor-pointer items-center gap-2 rounded-[15px] px-6 py-2.5"
          >
            <BsPlayFill size={24} /> Play
          </button>
          <button
            type="button"
            className="bg-white-100/10 flex cursor-pointer items-center gap-2 rounded-[15px] px-4 py-2.5"
          >
            <BsFillInfoCircleFill /> More info
          </button>
        </div>
      </figure>
    </article>
  );
};

export default Hero;
