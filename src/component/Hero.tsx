import React from "react";

const Hero: React.FC = () => {
  return (
    <article className="px-8 py-10">
      <figure>
        <img
          src="https://image.tmdb.org/t/p/w780/7HqLLVjdjhXS0Qoz1SgZofhkIpE.jpg"
          // width="780"
          // height="439"
          className="object-top-left h-80 w-full rounded-[20px] object-cover"
          alt=""
        />
      </figure>
    </article>
  );
};

export default Hero;
