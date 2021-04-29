import { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider"
import { actionTypes } from "../../reducer"

function Search({ hideButtons = false }) {
  const [{ }, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();

    console.log("you hit search", input);
    //this dispatchs an action
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
      })
    //
    history.push("/search");
  };

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>
{/* if hide button prop is passed use classes buttonHidden (display none)*/}
      {!hideButtons ? (
      <div className="search__buttons">
        <Button type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
      </div>
        
      ) : (
          // used a ternary to hide buttons initiated by buttonHidden
        <div className="search__buttons">
        <Button className="search__buttonsHidden" type="submit" onClick={search} variant="outlined">
          Google Search
        </Button>
      </div>
      )}
    </form>
  );
}

export default Search;
