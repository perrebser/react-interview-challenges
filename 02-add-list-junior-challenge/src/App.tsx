import { useState } from "react";
import "./App.css";
import { ListItem } from "./types";

function App() {
  const [value, setValue] = useState<string>('');

  const [list, setList] = useState<ListItem>([]);

  const handleAddToList = (title: string):void => {
    if (title === undefined || "") return;
    const newItem = {
      id: crypto.randomUUID(),
      title: title,
    };
    const newList = list.concat(newItem);
    setList(newList);
    setValue("");
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setValue(e.target.value);
  };

  const handleRemove = (id:string):void=>{
    const newList=list.filter((item) =>
      item.id!==id
    )
    setList(newList)
  }
  return (
    <main>
      <header>
        <input
          placeholder="Type something..."
          value={value}
          onChange={(e) => {
            handleOnChange(e);
          }}
        ></input>
        <button
          onClick={() => {
            handleAddToList(value);
          }}
        >
          Add to list
        </button>
      </header>
      <h2>Add to list</h2>
      <ul>
        {list.map((item) => (
          <li onClick={()=>{handleRemove(item.id)}} key={item.id}>{item.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
