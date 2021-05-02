import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
// import AppsIcon from "@material-ui/icons/Apps";
// import { Avatar } from "@material-ui/core";
import Search from '../../components/Search/Search'
// import titlepage from "../../assets/title.png"


function Home() {
  return (
    <div className="home">
      <div className="home-body">
        <h1>Hyke</h1>
        {/* <img
          src={titlepage}
          alt=""
        /> */}
        <div className="home__inputContainer">
        <Search />
        </div>
      </div>
      </div>
  );
}

export default Home;
