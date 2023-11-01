import { useEffect, useState } from "react";
import  "./index.css";

function App() {
  const RANDOM_FACTS_END = "https://catfact.ninja/fact";
  // const RANDOM_IMG_END = `/cat/says/${world}?fontSize=400&fontColor=blue`;
  
  const [fact, setFact] = useState();
  const [imageUrl,setImageUrl]=useState();
  
  useEffect(() => {
    fetch(RANDOM_FACTS_END)
      .then((response) => response.json())
      .then((result) => setFact(result.fact));
     
  }, []);

  useEffect(()=>{
    if(!fact) return
    const world=fact.split(' ')[0]
      
    setImageUrl(`https://cataas.com/cat/says/${world}?fontSize=400&fontColor=blue`)

  },[fact])
  
  const fetchFact = () => {
    fetch(RANDOM_FACTS_END)
      .then((response) => response.json())
      .then((result) => setFact(result.fact));
  };



  return (
    <div className="wrap">
      <button
        onClick={() => {
          fetchFact();
        }}
      >
        Get random fact
      </button>
      <p>
        <strong>Random Fact: </strong>
        {fact && <p>{fact}</p> }
      </p>
      
        {imageUrl && <img src={imageUrl} alt={`Image of cat saying first world from ${fact}`}></img> }
    </div>
  );
}

export default App;
