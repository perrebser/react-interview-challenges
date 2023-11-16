const filters = [
  {
    id: 1,
    filter: "Fantasía",
  },
  {
    id: 2,
    filter: "Ciencia ficción",
  },
  {
    id: 3,
    filter: "Zombies",
  },
  { id: 4, filter: "Terror" },
  { id: 5, filter: "Aventuras" },
];

interface Props {
//   onFilterBooks: (genre: string) => void;
  onChangeFilter: (genre: string)=>void;
}

const SideBar: React.FC<Props> = ({onChangeFilter}) => {
  return (
    <div className="flex flex-col gap-5 justify-between ml-3">
      <div>
        <p className="text-xl font-semibold">Por numero de paginas</p>
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          className="slider"
          id="myRange"
        ></input>
      </div>
      <ul className="flex flex-col gap-3 justify-between">
        <h3 className="text-xl font-semibold">Filtrar por genero: </h3>
        {filters.map((filter) => (
          <li
            className="cursor-pointer"
            onClick={() => onChangeFilter(filter.filter)}
            key={filter.id}
          >
            {filter.filter}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
