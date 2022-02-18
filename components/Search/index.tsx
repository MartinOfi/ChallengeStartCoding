interface Props {
  search: string;
  setSearch: any;
}
const Search = ({ search, setSearch }:Props) => {
  return (
    <div className="input-group rounded ">
      <input
        type="search"
        className="form-control rounded my-3 mx-5"
        placeholder="Enter at least 3 letters"
        defaultValue={search}
        aria-describedby="search-addon"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
export default Search;
