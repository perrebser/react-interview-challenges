interface Props {
  showFilters: boolean;
  onFilterChange:(event:React.ChangeEvent<HTMLSelectElement>) =>void;
}
const Filters: React.FC<Props> = ({ showFilters,onFilterChange }) => {
  return (
    <div>
      {showFilters && (
        <div className="flex justify-center mt-6">
          <select name="Filters" id="filter-select" className="w-1/6" onChange={(e)=>onFilterChange(e)}>
          <option value="placeholder">--Filter--</option>
          <option value="yearASC">By year ASC</option>
          <option value="yearDESC">By year DESC</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Filters;
