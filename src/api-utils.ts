import axios from "axios";

export interface MediaCast {
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
interface MediaCrew {
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
interface Movie {
  media_type: "movie";
  title: string;
  original_title: string;
  id: number;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}
interface Tv {
  media_type: "tv";
  name: string;
  original_name: string;
  id: number;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}

export type MediaType = "movie" | "tv";
type ApiTrendingItem = {
  media_type: MediaType;
  id: number;
  name?: string;
  title?: string;
  original_name?: string;
  original_title?: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
};
export type Info = {
  name: string;
  id: number;
};
type ApiMediaDetails = {
  title?: string;
  original_title?: string;
  name?: string;
  original_name?: string;
  created_by?: Info[];
  genres: Info[];
  overview: string;
  production_companies: Info[];
  release_date?: string;
  first_air_date?: string;
  runtime?: number;
  poster_path: string;
  backdrop_path: string;
};
export type MovieDetail = {
  media_type: "movie";
  title: string;
  original_title: string;
  overview: string;
  genres: Info[];
  production_companies: Info[];
  release_date: string;
  runtime: number;
  poster_path: string;
  backdrop_path: string;
};
export type TvDetails = {
  media_type: "tv";
  name: string;
  original_name: string;
  overview: string;
  created_by: Info[];
  genres: Info[];
  production_companies: Info[];
  first_air_date: string;
  poster_path: string;
  backdrop_path: string;
};
export type MediaItem = Movie | Tv;
export type MediaCredits = {
  id: number;
  crew: MediaCrew[];
  cast: MediaCast[];
};

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
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MOVIBES_ACCESS_TOKEN}`,
  },
};

export async function getAllTrending() {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?language=en-US`,
    options,
  );
  const data = res.data.results as ApiTrendingItem[];
  const parsedData: MediaItem[] = data.map((item) => {
    if (item.media_type === "movie") {
      return {
        media_type: item.media_type,
        title: item.title || "",
        original_title: item.original_title || "",
        id: item.id,
        overview: item.overview,
        vote_average: item.vote_average,
        poster_path: item.poster_path,
        backdrop_path: item.backdrop_path,
      } as Movie;
    } else {
      return {
        media_type: item.media_type,
        name: item.name || "",
        original_name: item.original_name || "",
        id: item.id,
        overview: item.overview,
        vote_average: item.vote_average,
        poster_path: item.poster_path,
        backdrop_path: item.backdrop_path,
      } as Tv;
    }
  });
  return parsedData;
}

export async function getPopularMovies() {
  const resp = await axios.get(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options,
  );
  const data = resp.data.results as ApiTrendingItem[];
  const parseData = data.map((item) => {
    return {
      media_type: item.media_type || "movie",
      title: item.title || "",
      original_title: item.original_title || "",
      id: item.id,
      overview: item.overview,
      vote_average: item.vote_average,
      poster_path: item.poster_path,
      backdrop_path: item.backdrop_path,
    } as Movie;
  });

  return parseData;
}

export async function getTrendingTV() {
  const resp = await axios.get(
    "https://api.themoviedb.org/3/trending/tv/week?language=en-US",
    options,
  );
  const data = resp.data.results as ApiTrendingItem[];
  const parsedData = data.map((item) => {
    return {
      media_type: item.media_type || "tv",
      name: item.name || "",
      original_name: item.original_name || "",
      id: item.id,
      overview: item.overview,
      vote_average: item.vote_average,
      poster_path: item.poster_path,
      backdrop_path: item.backdrop_path,
    } as Tv;
  });

  return parsedData;
}

export async function getUpcomingMovies() {
  const resp = await axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    options,
  );
  const data = resp.data.results as ApiTrendingItem[];
  const parsedData = data.map((item) => {
    return {
      media_type: item.media_type || "movie",
      title: item.title || "",
      original_title: item.original_title || "",
      id: item.id,
      overview: item.overview,
      vote_average: item.vote_average,
      poster_path: item.poster_path,
      backdrop_path: item.backdrop_path,
    } as Movie;
  });

  return parsedData;
}

export async function getPopularTV() {
  const resp = await axios(
    "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
    options,
  );
  const data = resp.data.results as ApiTrendingItem[];
  const parsedData = data.map((item) => {
    return {
      media_type: item.media_type || "tv",
      name: item.name || "",
      original_name: item.original_name || "",
      id: item.id,
      overview: item.overview,
      vote_average: item.vote_average,
      poster_path: item.poster_path,
      backdrop_path: item.backdrop_path,
    } as Tv;
  });
  return parsedData;
}

export async function getMediaDetails(media_type: MediaType, id: number) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}?language=en-US`,
    options,
  );
  const data = resp.data as ApiMediaDetails;
  if (media_type === "movie") {
    return {
      media_type,
      title: data.title || "",
      original_title: data.original_title || "",
      overview: data.overview,
      genres: data.genres,
      production_companies: data.production_companies,
      release_date: data.release_date,
      runtime: data.runtime || 0,
      poster_path: data.poster_path,
      backdrop_path: data.backdrop_path,
    } as MovieDetail;
  } else {
    return {
      media_type,
      name: data.name || "",
      original_name: data.original_name || "",
      overview: data.overview,
      created_by: data.created_by,
      genres: data.genres,
      production_companies: data.production_companies,
      first_air_date: data.first_air_date,
      poster_path: data.poster_path,
      backdrop_path: data.backdrop_path,
    } as TvDetails;
  }
}

export async function getMediaCredits(media_type: MediaType, id: number) {
  const resp = await axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}/credits?language=en-US`,
    options,
  );
  const data = resp.data as MediaCredits;
  return data;
}
