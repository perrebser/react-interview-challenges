import "../index.css"

interface Props {
  onChangeFilter: (event:React.ChangeEvent<HTMLSelectElement>) => void;
  onFilterPage:(event:React.ChangeEvent<HTMLInputElement>) => void;
  numPagesFilter:number
}

const SideBar: React.FC<Props> = ({ onChangeFilter,onFilterPage,numPagesFilter }) => {
 
  return (
    <div className="flex flex-col gap-5 justify-between ml-5 mt-6">
      <div>
        <p className="text-xl font-semibold">Por numero de paginas</p>
        <span>{numPagesFilter}</span>
        <input
          type="range"
          min="1"
          max="1560"
          defaultValue={numPagesFilter}
          className="slider"
          id="myRange"
          onChange={(event)=>onFilterPage(event)}
        ></input>
      </div>
      <div className="filters">
        <h2 className="text-xl pb-3 font-semibold">Filtra por genero</h2>
        <select name="filtros" id="filter" className="cursor-pointer text-justify text-lg" defaultValue={""} onChange={(event)=>onChangeFilter(event)}>
          <option value="">Todos</option>
          <option value="fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Zombies">Zombies</option>
          <option value="Terror">Terror</option>
          <option value="Aventuras">Aventuras</option>
        </select>
      </div>
      <div className="fixed bottom-0 border-solid border-2 border-white p-6 rounded-lg" id="user-info">
        <div className="flex flex-col items-center">
        <p>perrebser</p>
        <a href="https://github.com/perrebser"><img src="/github-mark-white.png" alt="github-mark-white.png" width={20}></img></a>
        </div>
        <div>
        <img src="https://avatars.githubusercontent.com/u/101811829?v=4" className="rounded-full" width={50}></img>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
