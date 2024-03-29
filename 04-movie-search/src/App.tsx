import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import Filters from "./components/Filters";
import { FilterOptions } from "./types";

function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const [updateSearchValue, setUpdateSearchValue] = useState<string>("");
  const [filters, setFilters] = useState<FilterOptions>({
    type: "",
    sort: "",
  });
  const { moviesResponse, getMovies } = useMovies({ filters });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies(searchValue);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.currentTarget.value;
    setSearchValue(event.currentTarget.value);
    setUpdateSearchValue(newSearch);
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setFilters({
      type: event.currentTarget.id,
      sort: event.currentTarget.value
    })
      
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getMovies(updateSearchValue);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [updateSearchValue]);

  return (
    <div>
      <header className="flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-9 font-bold">Movie Search</h1>
        <form
          className="flex items-center gap-4"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            required
            onChange={(e) => handleOnChange(e)}
            value={searchValue}
            className="bg-gray-50 border text-sm rounded-lg w-auto block p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
            placeholder="Batman, Avengers..."
          />
          <button type="submit" className="border-white dark:bg-gray-700 w-24">
            Search
          </button>
        </form>
      </header>
      <div>
        <Filters
          showFilters={moviesResponse.length > 0}
          onFilterChange={handleFilter}
        ></Filters>
      </div>
      <main className="flex justify-center mt-7">
        <Movies movies={moviesResponse} />
      </main>
    </div>
  );
}

export default App;
