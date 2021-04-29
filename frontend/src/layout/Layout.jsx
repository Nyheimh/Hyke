// import Search from '../components/Search'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar"

export default function Layout(props) {
  return (
    <div>

    <header>
        <Link to='/register'>Login/Register</Link>
        <Navbar />
        <h1>Hyke</h1>
        <hr/>
      {/* <Search /> */}
    </header>
      {props.children}
    </div>
  );
}
