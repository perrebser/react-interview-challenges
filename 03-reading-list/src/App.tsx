import { useEffect, useState } from "react";
import "./App.css";
import Books, { Book } from "./components/Books";
import data from "./const/books.json";

function App() {
  const [books,setBooks]=useState<Book[]>([])

  useEffect(()=>{
    setBooks(data.library.map((books)=>books.book))
  },[])

  return (
    <>
      <main>
        <nav className="top-0 text-4xl flex  items-center mt-4">
          <h1 className="bg-green-800 font-extrabold text-3xl p-1">
            <a href="#">Reading List</a>
            </h1>
          </nav>
        <section className="mt-11 ml-12">
          <Books books={books}/>
        </section>
        <footer className="flex justify-center bottom-0">
          <a href="https://github.com/perrebser">By perrebser</a>
        </footer>
      </main>
    </>
  );
}

export default App;
