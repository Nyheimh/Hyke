import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Layout.css";

export default function Layout(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <Navbar currentUser={currentUser} handleLogout={handleLogout} />
      {currentUser && (
        <>

        </>
      )}

      {props.children}

      <Footer />
    </div>
  );
}

