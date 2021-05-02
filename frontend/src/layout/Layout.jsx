// import Search from '../components/Search'
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../screens/Home/Home";
import Footer from "../components/Footer/Footer";
import "./Layout.css";
// import Trails from "../screens/Trails/Trails"

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      {/* <header> */}
      <Navbar currentUser={currentUser} handleLogout={handleLogout} />

      {/* <hr /> */}
      {currentUser && (
        <>
          {/* <Link to ='/trails'>'Trails</Link>
            <Link to = '/reviews' > Reviews</Link> */}
        </>
      )}
      {/* <Search /> */}
      {/* </header> */}
      {props.children}
      {/* <Home /> */}
      {/* <Trails /> */}
      <Footer />
    </div>
  );
}
