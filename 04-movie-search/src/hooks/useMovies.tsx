import { useEffect, useState } from "react";
import { FilterOptions, movieType } from "../types";

interface MoviesHook {
  moviesResponse: Array<movieType>;
  getMovies: (querySearch: string) => void;
}
interface Props {
  filters: FilterOptions;
}

export function useMovies({ filters }: Props): MoviesHook {
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
    //Todo add memo
    if (filters.type === "filter-year") {
      if (filters.sort === "ASC") {
        const filteredMovies = [...moviesResponse].sort((a, b) => {
          return parseInt(a.Year) - parseInt(b.Year);
        });
        setMoviesResponse(filteredMovies);
      } else if (filters.sort === "DESC") {
        const filteredMovies = [...moviesResponse].sort((a, b) => {
          return parseInt(b.Year) - parseInt(a.Year);
        });
        setMoviesResponse(filteredMovies);
      }
    } else if (filters.type === "filter-name") {
      if(filters.sort==="ASC"){
      const filteredMovies = [...moviesResponse].sort((a, b) => {
        return b.Title.localeCompare(a.Title);
      });
      setMoviesResponse(filteredMovies);
    }else if(filters.sort==="DESC"){
      const filteredMovies=[...moviesResponse].sort((a,b)=>{
        return a.Title.localeCompare(b.Title);
      })
      setMoviesResponse(filteredMovies);
    }
  }
}, [filters]);

  return { moviesResponse, getMovies };
}
