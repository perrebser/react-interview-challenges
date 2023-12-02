import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import { useMovies } from "./hooks/useMovies";


function App() {
  const [searchValue, setSearchValue] = useState<string>("");
  const { moviesResponse,getMovies } = useMovies();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies(searchValue);

  };

  const handleOnChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setSearchValue(event.currentTarget.value)
  }

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
            onChange={(e)=>handleOnChange(e)}
            value={searchValue}
            className="bg-gray-50 border text-sm rounded-lg w-auto block p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
            placeholder="Batman, Avengers..."
          />
          <button type="submit" className="border-white dark:bg-gray-700 w-24">
            Search
          </button>
        </form>
      </header>
      <main className="flex justify-center mt-7">
        <Movies movies={moviesResponse} />
      </main>
    </div>
  );
}

export default App;
