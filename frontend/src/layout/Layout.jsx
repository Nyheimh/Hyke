// import Search from '../components/Search'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <header>
        <Navbar
        />
        <h1>Hyke</h1>
        {
          currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
        : 
          <Link to="/login">Login/Register</Link>
        }
        <hr />
        {
          currentUser &&
          <>
            <Link>Trails</Link>
            <Link> Reviews</Link>
          </>
        }
        {/* <Search /> */}
      </header>
      {props.children}
    </div>
  );
}
