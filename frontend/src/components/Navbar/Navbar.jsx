import "./Navbar.css";
import { Link } from "react-router-dom";



export default function Navbar(props) {


  const { currentUser, handleLogout } = props
  
  return (
    <div className="navbar">
      {/* <Header /> */}
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/trails">Hykes</Link>
        {currentUser &&
        <Link to="/trails/new">Add Hyke</Link>}
        <Link to="/about">About</Link>
      {currentUser ? (
        <div className="username">
          <p className="welcome">Welcome, {currentUser.username}</p>
          <section className="button">

            <button onClick={handleLogout}>Logout</button>
          </section>
          </div>
        ) : (
          <Link to="/login">Login/Register</Link>
          )}
          </div>
    </div>
  );
}
