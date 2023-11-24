import "../App.css";

export interface Book {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: {
    name: string;
    otherBooks: string[];
  };
}

interface Props {
  books: Book[];
  onBookClick: (ISBN: string) => void;
}
const Books: React.FC<Props> = ({ books, onBookClick }) => {
  return (
    <>
      {books.length == 0 ? (
        <div className="flex items-center justify-center mt-4">
          <span className="font-normal text-xl">Sin libros en la lista de lectura</span>
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-6 gap-x-3">
          {books.map((book) => (
            <li
              key={book.ISBN}
              className="flex justify-center flex-col w-52 cursor-pointer"
              onClick={() => onBookClick(book.ISBN)}
            >
              <p className="uppercase line-clamp-1 font-bold">{book.title}</p>
              <div className="img-content">
                <img
                  src={book.cover}
                  className="aspect-9/16 object-cover"
                  width={200}
                ></img>
                <div className="image-overlay"></div>
              </div>
              <span>
                <p className="text-sm font-semibold">{book.year}</p>
                <p className="text-sm font-semibold capitalize">
                  {book.pages} pág.
                </p>
              </span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Books;
