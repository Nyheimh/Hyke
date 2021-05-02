import { useState } from "react";
import "./Search.css";
// import { useHistory } from "react-router-dom";


const Search = () => {
  // const [{ }, dispatch] = useStateValue();

  const [search, setSearch] = useState('');
  // const history = useHistory();

    console.log("you hit search", search);
    //this dispatchs an action
    // dispatch({
      // type: actionTypes.SET_SEARCH_TERM,
      // term: input
      // })
    //
    // history.push("/search");

  return (
    <form className="search">
      <div className="search-input">
        <input value={search} type="text" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="search-buttons">
        <button type="submit" onClick={search} variant="outlined"> Search </button>
        <button variant="outlined">Random Hyke</button>

      </div>
    </form>
  );
}

export default Search;
