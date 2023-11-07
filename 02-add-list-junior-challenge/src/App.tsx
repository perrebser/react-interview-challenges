import { useState } from "react";
import "./App.css";
import { ListItem } from "./types";

function App() {
  const [list, setList] = useState<ListItem>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault(); //in order to prevent the page from reloading on the form onSubmit event
    const { elements } = event.currentTarget;
    const input = elements.namedItem("inputElement");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;
    const newItem = {
      id: crypto.randomUUID(),
      title: input.value,
    };
    setList(() => {
      return [...list, newItem];
    });
    input.value = " ";
  };

  const handleRemove = (id: string): void => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  return (
    <main>
      <header>
        <h2>Todo list react interview</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <input name="inputElement" placeholder="Type something..."></input>
        <button type="submit">Add to list</button>
      </form>
      <section>
        <h2>Element List</h2>
        <ul>
          {list.length === 0 ? (
            <p>
              <strong>Empty list!</strong>
            </p>
          ) : (
            list.map((item) => (
              <li
                onClick={() => {
                  handleRemove(item.id);
                }}
                key={item.id}
              >
                {item.title}
              </li>
            ))
          )}
        </ul>
      </section>
    </main>
  );
}

export default App;
