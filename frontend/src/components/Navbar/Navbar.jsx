import './Navbar.css';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/"> Home </Link>
      <Link to="/hykes">Hykes</Link>
      <Link to="/add">Add Hyke</Link>
      <Link to="/about">About</Link>
      
      
    </div>
  )
}
