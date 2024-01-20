import './App.css'
import resultado from '../const/mock.json'
function App() {
  return (
    <>
     <ul className=''>
      {
        resultado.results.map((p)=>
         <li id={p.name}>{p.name}</li>
        )
      }
     </ul>
    </>
  )
}

export default App
