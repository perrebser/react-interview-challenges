import { useEffect, useState } from "react";
import "./App.css";
import Books, { Book } from "./components/Books";
import data from "./const/books.json";
import SideBar from "./components/SideBar";

function App() {
  const [books] = useState<Book[]>(
    data.library.map((book) => book.book)
  );

  const [readingListCount, setReadingListCount] = useState<number>(0);

  const [readingList, setReadingList] = useState<Book[]>([]);

  const[avaliableBooks,setAvaliableBooks]= useState<number>(books.length)

  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  const [filter, setFilter] = useState<string>("");

  const handleChangeFilter = (event:React.ChangeEvent<HTMLSelectElement>): void => {
    setFilter(event.target.value);
  };

  const handleAddToReadingList = (ISBN: string): void => {
    const book = books.find((element) => element.ISBN === ISBN);
    setReadingList([...readingList, book!]);
  };

  useEffect(() => {
    setReadingListCount(readingList.length);
  }, [readingList]);

  useEffect(() => {
    if (filter === "") {
      setFilteredBooks(books);
    } else {
      const filterBooks = books.filter((book) => book.genre === filter);
      setFilteredBooks(filterBooks);
    }
  }, [filter, books]);
  return (
    <>
      <main>
        <nav className="text-4xl flex items-center mt-4">
          <h1 className="bg-green-800 font-extrabold text-3xl p-2 ml-3">
            <a href="#">Reading List</a>
          </h1>
        </nav>
        <section className="content">
          <div className="flex mb-3 justify-items-start gap-4 border-b-2 border-white">
            <h2 className="text-2xl cursor-pointer hover:text-white">
              Libros disponibles({avaliableBooks})
            </h2>
            <h2 className="text-2xl cursor-pointer hover:text-white">
              Lista de Lectura({readingListCount})
            </h2>
          </div>
          <Books
            books={filteredBooks}
            onAddToReadingList={handleAddToReadingList}
          />
        </section>
        <aside>
          <SideBar onChangeFilter={handleChangeFilter} />
        </aside>
      </main>
    </>
  );
}

export default App;
