import React from "react";
import { BsFillInfoCircleFill, BsPlayFill } from "react-icons/bs";

const Hero: React.FC = () => {
  return (
    <article className="px-8 py-10">
      <figure className="relative">
        <img
          src="https://image.tmdb.org/t/p/w780/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg"
          // width="780"
          // height="439"
          className="object-top-left h-80 w-full rounded-[20px] object-cover"
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
