import { createFileRoute } from "@tanstack/react-router";
import { MovieContainer } from "../../component/MovieCard";
import Hero from "../../component/Hero";
import {
  getAllTrending,
  getPopular,
  getUpcoming,
  type Trending,
} from "../../api-utils";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/_homeLayout/")({
  component: RouteComponent,
});
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function RouteComponent() {
  const [trendingMovies, setTrendingMovies] = useState<Trending[]>([]);
  const [trendingTv, setTrendingTv] = useState<Trending[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Trending[]>([]);
  const [popularMovies, setPopularMovies] = useState<Trending[]>([]);
  useEffect(() => {
    const fn = async () => {
      const movieData = await getAllTrending("movie");
      const tvData = await getAllTrending("tv");
      const upcomingMovies = await getUpcoming();
      const popularMovies = await getPopular();
      console.log(upcomingMovies);
      setTrendingTv(tvData);
      setTrendingMovies(movieData);
      setUpcomingMovies(upcomingMovies);
      setPopularMovies(popularMovies);
    };
    fn();
  }, []);
  const monthNum = new Date().getMonth();
  return (
    <div className="scroll overflow-y-scroll text-white">
      <Hero />
      <section className="p-8">
        <div className="mb-8 flex justify-between">
          <h2 className="text-white-100 text-2xl font-semibold">Trending</h2>
          <button
            type="button"
            className="text-gray-150 cursor-pointer text-base font-semibold"
          >
            See all
          </button>
        </div>
        <MovieContainer items={trendingMovies} />
      </section>
      <section className="p-8">
        <div className="mb-8 flex justify-between">
          <h2 className="text-white-100 text-2xl font-semibold">TV Series</h2>
          <button
            type="button"
            className="text-gray-150 cursor-pointer text-base font-semibold"
          >
            See all
          </button>
        </div>
        <MovieContainer items={trendingTv} />
      </section>
      <section className="p-8">
        <div className="mb-8 flex justify-between">
          <h2 className="text-white-100 text-2xl font-semibold">Upcoming</h2>
          <button
            type="button"
            className="text-gray-150 cursor-pointer text-base font-semibold"
          >
            See all
          </button>
        </div>
        <MovieContainer items={upcomingMovies} />
      </section>
      <section className="p-8">
        <div className="mb-8 flex justify-between">
          <h2 className="text-white-100 text-2xl font-semibold">
            Popular movies on {months[monthNum]}
          </h2>
          <button
            type="button"
            className="text-gray-150 cursor-pointer text-base font-semibold"
          >
            See all
          </button>
        </div>
        <MovieContainer items={popularMovies} />
      </section>
    </div>
  );
}
