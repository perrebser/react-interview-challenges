interface Props {
  showFilters: boolean;
  onFilterChange:(event:React.ChangeEvent<HTMLSelectElement>) =>void;
}

const Filters: React.FC<Props> = ({ showFilters,onFilterChange }) => {
  return (
    showFilters && (  
          <div className="flex justify-center gap-4 mt-6">
          <select name="Filters" id="filter-year" className="w-1/6"  onChange={(e)=>onFilterChange(e)}>
          <option value="" disabled selected hidden> --Filter-- </option>
          <option value="ASC">By year  ↑</option>
          <option value="DESC">By year ↓</option>
          </select>
          <select name="Filters" id="filter-name" onChange={(e)=>onFilterChange(e)}>
           <option value="" disabled selected hidden> --Filter-- </option>
            <option value="ASC">Sort by Name ↑</option>
            <option value="DESC">Sort by Name ↓</option>
          </select>
        </div>
    )
  );
};

export default Filters;
