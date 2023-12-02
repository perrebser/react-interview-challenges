import { movieType } from "../types";

interface Props {
  movies: movieType[];
}
const Movies: React.FC<Props> = ({ movies }) => {
  return (
    <div>
      <ul className="grid col-span-1 md:grid-cols-2 lg:grid-cols-3">
        {movies.map((element) => (
          <li key={element.imdbID} className="flex flex-col items-center mt-4">
            <span className="flex flex-col items-center justify-center">
            <p>{element.Title}</p>
            <p>{element.Year}</p>
            </span>
            <img src={element.Poster} alt={element.Title} width={200} className="rounded-lg"></img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
