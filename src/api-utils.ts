import axios from "axios";
export const months = [
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

export interface MovieCast {
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
}
export interface MovieCrew {
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface MovieCredit {
  id: number;
  cast: MovieCast[];
  crew: MovieCrew[];
}

interface MovieGenre {
  id: number;
  name: string;
}
export interface MovieDetails {
  backdrop_path: string;
  genres: MovieGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  status: string;
  tagline: string;
  title: string;
  runtime: number;
  vote_average: number;
}

export interface Trending {
  backdrop_path: string;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: "tv" | "movie";
  vote_average: number;
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MOVIBES_ACCESS_TOKEN}`,
  },
};

export async function getAllTrending(type: "movie" | "tv") {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/${type}/week?language=en-US`,
    options,
  );
  const data = res.data.results as Trending[];
  return data;
}

export async function getUpcoming() {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options,
  );
  const data = res.data.results as Trending[];
  return data;
}

export async function getPopular() {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options,
  );
  const data = res.data.results as Trending[];
  return data;
}

export async function getDetails(type: "movie" | "tv", id: number) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}?language=en-US`,
    options,
  );
  const data = res.data as MovieDetails;
  return data;
}

export async function getMovieCredits(type: "movie" | "tv", id: number) {
  console.log(1);
  const res = await axios.get(
    `https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US`,
    options,
  );
  const data = res.data as MovieCredit;
  return data;
}
