import { useEffect, useState } from "react";
import "./App.css";
import Books, { Book } from "./components/Books";
import data from "./const/books.json";
import SideBar from "./components/SideBar";

function App() {
  const [books, setBooks] = useState<Book[]>(
    data.library.map((book)=>book.book)
  );

  const [readingListCount, setReadingListCount] = useState<number>(0);

  const [toggleRender, setToggleRender] = useState<number>(1);

  const [readingList, setReadingList] = useState<Book[]>([]);

  const [avaliableBooks, setAvaliableBooks] = useState<number>(books.length);

  const [renderedBooks, setRenderedBooks] = useState<Book[]>([]);

  const [filter, setFilter] = useState<string>("");

  const [numPagesFilter, setNumPagesFilter] = useState<number>(200);



  const handleChangeFilter = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setFilter(event.target.value);
  };

  const handleChangeFilterPages = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const maxPages: number = event.target.valueAsNumber;
    setNumPagesFilter(maxPages);
    const filteredBooks = books.filter((element) => element.pages <= maxPages);
    setRenderedBooks(filteredBooks);
  };

  const handleBookClick = (ISBN: string): void => {
    const book = books.find((element) => element.ISBN === ISBN);
    if (book) {
      setReadingList([...readingList, book!]);
      const avaliableBooks = books.filter((element) => element.ISBN !== ISBN);
      setBooks(avaliableBooks);
    } else {
      handleDeleteFromReadingList(ISBN);
    }
  };
  const handleDeleteFromReadingList = (ISBN: string): void => {
    const updatedReadingList = readingList.filter(
      (element) => element.ISBN !== ISBN
    );
    setReadingList(updatedReadingList);
    const bookDelete = readingList.find((element) => element.ISBN === ISBN);
    setBooks([...books, bookDelete!]);
  };
  useEffect(() => {
    setReadingListCount(readingList.length);
    setAvaliableBooks(books.length);
  }, [readingList, books]);

  useEffect(() => {
    if (filter === "") {
      setRenderedBooks(books);
    } else {
      const filterBooks = books.filter((book) => book.genre === filter);
      setRenderedBooks(filterBooks);
    }
  }, [filter, books]);
  useEffect(() => {
    if (toggleRender === 1) {
      setRenderedBooks(books);
    } else if (toggleRender === 0) {
      setRenderedBooks(readingList);
    }
  }, [toggleRender, books, readingList]);

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
            <h2
              className="text-2xl cursor-pointer hover:text-white"
              onClick={() => {
                setToggleRender(1);
              }}
            >
              Libros disponibles({avaliableBooks})
            </h2>
            <h2
              className="text-2xl cursor-pointer hover:text-white"
              onClick={() => {
                setToggleRender(0);
              }}
            >
              Lista de Lectura({readingListCount})
            </h2>
          </div>
          <Books books={renderedBooks} onBookClick={handleBookClick} />
        </section>
        <aside>
          <SideBar
            onChangeFilter={handleChangeFilter}
            onFilterPage={handleChangeFilterPages}
            numPagesFilter={numPagesFilter}
          />
        </aside>
      </main>
    </>
  );
}

export default App;
