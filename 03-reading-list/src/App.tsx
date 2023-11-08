import "./App.css";
import Books from "./components/Books";
function App() {
  return (
    <>
      <main className="">
        <nav className="top-0">Reading List</nav>
        <section>
          <Books/>
        </section>
        <footer className="flex justify-center bottom-0 fixed">
          <p>By perrebser</p>
        </footer>
      </main>
    </>
  );
}

export default App;
