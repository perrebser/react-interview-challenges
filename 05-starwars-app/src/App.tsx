import { useEffect, useState } from "react";
import { apiResponse,characterInfo } from "./types";
import {usePeople} from "../hooks/usePeople";

function App() {
 
  const [characterResponse, setCharacterResponse] = useState<apiResponse>();
  const [currentCharacterId,setCurrentCharacterId]=useState<number>(1);
  const [characterDetails,setcharacterDetails]=useState<characterInfo>()
  const {getCharacters,getCharacterDetails}=usePeople();
  
  useEffect(() => {
   getCharacters().then((data)=>setCharacterResponse(data))
  }, []);

  const handleOnClick=(p:characterInfo):void=>{
    const id=p.url.split('/').slice(-2)[0]
    setCurrentCharacterId(parseInt(id))
  }

  useEffect(()=>{
      getCharacterDetails(currentCharacterId).then((data)=>setcharacterDetails(data))
  },[currentCharacterId])

  console.log(characterDetails)
    return (
    <div className="flex justify-between ">
      {characterResponse && parseInt(characterResponse.count) > 0 ? (
        <div className="flex flex-col gap-1 items-center">
          <ul className="flex flex-col gap-3">
            {characterResponse.results.map((p) => (
              <li className="hover:text-red-300 cursor-pointer" onClick={()=>handleOnClick(p)} key={p.name}>{p.name}</li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2">
            <button>Previous</button>
            <button>Next</button>
          </div>
          <span className="font-bold">Total results: {characterResponse.count}</span>
        </div>
      ) : (
        <>
          <p>No results found!</p>
        </>
      )}
      {
        characterDetails &&
        <div>
        <h2 className="text-xl">Character Details</h2>
        <div className="mt-2 flex flex-col gap-1">
        <h3>Name: {characterDetails.name}</h3>
        <p>Eye color: {characterDetails.eye_color}</p>
        <p>Gender: {characterDetails.gender}</p>
        <p>Mass: {characterDetails.mass}kg</p>
        <p>Height: {characterDetails.height}cm</p>
        </div>
      </div>
      }
      
    </div>
  );
}

export default App;
