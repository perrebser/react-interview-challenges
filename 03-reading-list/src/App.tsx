import { useEffect, useState } from "react";
import "./App.css";
import Books, { Book } from "./components/Books";
import data from "./const/books.json";
import SideBar from "./components/SideBar";
function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const [filteredBooks,setFilteredBooks]=useState<Book[]>([]);

  const [filter,setFilter]=useState<string>()

  useEffect(() => {
    setBooks(data.library.map((books) => books.book));
  }, []);

  const handleChangeFilter=(genre:string):void=>{
      setFilter(genre)
  }
  useEffect(()=>{
    if(filter==="Fantasía"){
      handleOnFilter(filter)
    }else if(filter==="Ciencia ficción"){
      handleOnFilter(filter)
    }else if(filter==="Zombies"){
      handleOnFilter(filter)
    }else if(filter==="Terror"){
      handleOnFilter(filter)
    }else if(filter==="Aventuras"){
      handleOnFilter(filter)
    }else{
      setFilteredBooks(books)
    }
  },[books,filter])

  const handleOnFilter = (genre: string): void => {
    const filteredBooks = books.filter((book) => book.genre === genre);
    setFilteredBooks(filteredBooks)
  };

  return (
    <>
      <main>
        <nav className="top-0 text-4xl flex items-center mt-4">
          <h1 className="bg-green-800 font-extrabold text-3xl p-1">
            <a href="#">Reading List</a>
          </h1>
        </nav>
        <section className="mt-11 content">
          <Books books={filteredBooks} />
        </section>
        <aside className="flex flex-col justify-center items-start ">
          <SideBar onChangeFilter={handleChangeFilter} />
        </aside>
        <footer className="flex bottom-0 justify-center">
          <a href="https://github.com/perrebser">By perrebser</a>
        </footer>
      </main>
    </>
  );
}

export default App;
