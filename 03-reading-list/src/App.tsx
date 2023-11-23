import { useEffect, useState } from "react";
import "./App.css";
import Books, { Book } from "./components/Books";
import data from "./const/books.json";
import SideBar from "./components/SideBar";

function App() {

  const [books,setBooks] = useState<Book[]>(
    data.library.map((book) => book.book)
  );

  const [readingListCount, setReadingListCount] = useState<number>(0);

  const [readingList, setReadingList] = useState<Book[]>([]);

  const[avaliableBooks,setAvaliableBooks]= useState<number>(books.length)

  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  const [filter, setFilter] = useState<string>("");

  const[ numPagesFilter,setNumPagesFilter]=useState<number>(200)

  const handleChangeFilter = (event:React.ChangeEvent<HTMLSelectElement>): void => {
    setFilter(event.target.value);
  };

  const handleChangeFilterPages=(event:React.ChangeEvent<HTMLInputElement>):void=>{
    const maxPages:number=event.target.valueAsNumber
    setNumPagesFilter(maxPages)
    const filteredBooks=books.filter((element)=>element.pages<=maxPages);
    setFilteredBooks(filteredBooks);
  }

  const handleAddToReadingList = (ISBN: string): void => {
    //TODO need to check if books is in reading list -> delete from reading, if not -> add to reading list //rerender avaliable & readingList
    const book = books.find((element) => element.ISBN === ISBN);
    if(book){
      setReadingList([...readingList, book!]);
      const avaliableBooks=books.filter((element)=>element.ISBN!==ISBN)
      setBooks(avaliableBooks)
    }else{
      const ereadingList=readingList.filter((element)=>element.ISBN!==ISBN)
      setReadingList(ereadingList)
      console.log(readingList)
      console.log(books)
    }
  };

  useEffect(() => {
    setReadingListCount(readingList.length);
    setAvaliableBooks(books.length)
  }, [readingList,books]);

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
            <h2 className="text-2xl cursor-pointer hover:text-white" onClick={()=>setFilteredBooks(books)}>
              Libros disponibles({avaliableBooks})
            </h2>
            <h2 className="text-2xl cursor-pointer hover:text-white" onClick={()=>setFilteredBooks(readingList)}>
              Lista de Lectura({readingListCount})
            </h2>
          </div>
          <Books
            books={filteredBooks}
            onAddToReadingList={handleAddToReadingList}
          />
        </section>
        <aside>
          <SideBar onChangeFilter={handleChangeFilter} onFilterPage={handleChangeFilterPages} numPagesFilter={numPagesFilter} />
        </aside>
      </main>
    </>
  );
}

export default App;
