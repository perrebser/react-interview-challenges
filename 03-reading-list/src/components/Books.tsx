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

interface Props{
  books:Book[];
}
const Books: React.FC<Props> = ({books}) => {
  return (
    <>
      <ul className="ml-4 grid grid-cols-4 gap-x-5 max-w-3xl">
        {books.map((book) => (
          <li  key={book.ISBN} className="flex justify-center flex-col">
            <p className="uppercase line-clamp-1 font-bold">{book.title}</p>
            <div className="img-content">
            <img src={book.cover} className="aspect-9/16" width={200}></img>
            <div className="image-overlay"></div>
            </div>
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
