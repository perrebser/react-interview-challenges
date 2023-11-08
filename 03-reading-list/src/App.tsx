import { useState } from "react";
import "./App.css";
import Books from "./components/Books";
function App() {
  const [readingList,setReadingList]=useState<Books[]>([])

  const handleAddReadingList=(isbn:number):void=>{

  }
  return (
    <>
      <main>
        <nav className="top-0 text-4xl flex  items-center mt-4">
          <h1 className="bg-green-800 font-extrabold text-3xl p-1">
            <a href="#">Reading List</a>
            </h1>
          </nav>
        <section className="mt-11">
          <Books/>
        </section>
        <aside>
          <p>reading</p>
        </aside>
        <footer className="flex justify-center bottom-0">
          <a href="https://github.com/perrebser">By perrebser</a>
        </footer>
      </main>
    </>
  );
}

export default App;
