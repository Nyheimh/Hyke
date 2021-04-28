// import Search from '../components/Search'
import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <div>

    <header>
      <Link to='/login'>Login/Register</Link>
        <h1>Hyke</h1>
        <hr/>
      {/* <Search /> */}
    </header>
      {props.children}
    </div>
  );
}
