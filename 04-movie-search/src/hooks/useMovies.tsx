import { useEffect, useState } from "react";
import { movieType } from "../types";

interface MoviesHook {
  moviesResponse: Array<movieType>;
  getMovies: (querySearch: string) => void;
}
interface Props {
  filter: string;
}

export function useMovies({ filter }: Props): MoviesHook {
  const [moviesResponse, setMoviesResponse] = useState<Array<movieType>>([]);

  const getMovies = (querySearch: string): void => {
    fetch(
      `https://www.omdbapi.com/?apikey=${
        import.meta.env.VITE_API_KEY
      }&s=${querySearch}`
    )
      .then((response) => response.json())
      .then((data) => setMoviesResponse(data.Search || []));
  };

  useEffect(() => {
    console.log('ejecutando')
    if (filter === "yearDESC") {
      const filteredMovies = [...moviesResponse].sort((a, b) => {
        return parseInt(a.Year) - parseInt(b.Year);
      });
      setMoviesResponse(filteredMovies);
    } else if (filter === "yearASC") {
      const filteredMovies =  [...moviesResponse].sort((a, b) => {
        return parseInt(b.Year) - parseInt(a.Year);
      });
      setMoviesResponse(filteredMovies);
    }else if(filter==="placeholder")return
  }, [filter, moviesResponse]);
  return { moviesResponse, getMovies };
}
