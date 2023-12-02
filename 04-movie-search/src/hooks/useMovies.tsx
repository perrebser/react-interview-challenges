import { useState } from "react";
import { movieType } from "../types";

interface MoviesHook {
  moviesResponse: Array<movieType>;
  getMovies: (querySearch: string) => void;
}

export function useMovies(): MoviesHook {
  const [moviesResponse, setMoviesResponse] = useState<Array<movieType>>([]);

  const getMovies = (querySearch: string): void => {
    fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${querySearch}`)
      .then((response) => response.json())
      .then((data) => setMoviesResponse(data.Search || []));
  };

  return { moviesResponse, getMovies };
}
