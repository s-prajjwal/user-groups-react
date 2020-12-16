import "./Search.css";

const Search = () => {
    const getData = () => {
        
    }
    const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        name="search"
        placeholder="Search..."
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
