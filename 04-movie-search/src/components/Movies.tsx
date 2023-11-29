import { movie } from "../types"


interface Props{
    movies:movie[]
}
const Movies:React.FC<Props> = ({movies})=>{
return(
    <>
    <ul>
    {movies.map((element)=>(
        <li
        key={element.Title}
        >

            <p>{element.Director}</p>
            <img src={element.Poster} alt={element.Title}></img>
        </li>
    ))
    }
    </ul>
    </>
)
}


export default Movies