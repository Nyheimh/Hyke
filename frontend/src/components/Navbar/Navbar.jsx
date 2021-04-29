import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* <div className="home__headerLeft"> */}
        <Link to="/"> Home </Link>
        <Link to="/trails">Hykes</Link>
      {/* </div> */}
      {/* <div className="home__headerRight"> */}
        <Link to="/trails/new">Add Hyke</Link>
        <Link to="/about">About</Link>
        {/* </div> */}
    </div>
  );
}
