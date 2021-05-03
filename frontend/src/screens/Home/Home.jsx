import "./Home.css";
import React from "react";
import Search from "../../components/Search/Search";

function Home() {
  return (
    <div className="home">
      <div className="home-body">
        <h1>Hyke</h1>
        <div className="home-inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
