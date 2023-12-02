import { movieType } from "./types";
import movies from "../mocks/movies.json";
import "./App.css";
import Movies from "./components/Movies";

function App() {
  const mocks=movies.Search
  return (
   <div>
    <header className="flex flex-col items-center justify-center">
      <h1 className="text-3xl mb-9">Movie Search</h1>
      <form className="flex items-center gap-4">
        <input type="text" className="bg-gray-50 border text-sm rounded-lg w-auto block p-2.5 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white" placeholder="Batman, Avengers..."/>
        <button type="submit" className="border-white dark:bg-gray-700 w-24">Search</button>
      </form>
    </header>
    <main className="flex justify-center mt-7">
      <Movies movies={mocks}/>
    </main>
   </div>
  );
}

export default App;
