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
    `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`,
    options,
  );
  const data = res.data.results as Trending[];
  console.log(data);
  return data;
}

export async function getUpcoming() {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options,
  );
  const data = res.data.results as Trending[];
  console.log(data);
  return data;
}

export async function getPopular() {
  const res = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options,
  );
  const data = res.data.results as Trending[];
  console.log(data);
  return data;
}
