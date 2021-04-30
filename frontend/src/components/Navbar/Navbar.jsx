import "./Navbar.css";
import Header from "../../components/Header/Header"
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <div className="navbar">
      {/* <Header /> */}
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/trails">Hykes</Link>
        <Link to="/trails/new">Add Hyke</Link>
        <Link to="/about">About</Link>
      </div>
      
    </div>
  );
}
