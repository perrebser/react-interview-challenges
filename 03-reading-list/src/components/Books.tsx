import data from "../const/books.json";
import "../App.css";


export interface Book{
  title:string,
  pages:number,
  genre:string,
  cover:string,
  synopsis:string,
  year:number,
  ISBN:string,
  author:{
    name:string,
    otherBooks:string[]
  }
}
const Books: React.FC = () => {
  const books:Book[]=data.library.map((books)=>books.book)
  return (
    <>
      <ul>
        {books.map((book) => (
          <li  key={book.ISBN}>
            <p className="uppercase line-clamp-1 font-bold">{book.title}</p>
            <img src={book.cover} width={200}></img>
            <span>
              <p className="text-sm font-semibold">{book.year}</p>
              <p className="text-sm font-semibold capitalize">{book.pages} pág.</p>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Books;
