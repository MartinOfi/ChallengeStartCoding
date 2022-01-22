const Search = ({ search, setSearch }) => {
  return (
    <div className="input-group rounded ">
      <input
      
        type="search"
        className="form-control rounded my-3 mx-5"
        placeholder="Search"
        aria-describedby="search-addon"
        onChange={(e)=>setSearch(e.target.value)}
      />
      
    </div>
  );
};
export default Search;
