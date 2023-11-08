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
          <li key={book.ISBN}>
            <p className="w-95% capitalize line-clamp-1">{book.title}</p>
            <img src={book.cover} width={200}></img>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Books;
