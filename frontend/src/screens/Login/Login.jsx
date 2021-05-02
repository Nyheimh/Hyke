import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    // confirm: "",
  });

  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="login"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3 className="login-title"> Login </h3>

      <br />
      
      <div className="container">
        <div className="inner-container">

        <label>
          Username:
          <input
            placeholder="Username"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            />
        </label>
<br />
        <label>
          Password:
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            />
        </label>
            </div>
        <div className="button-container">
          <Link to="/register">Register</Link>
          <div className="button">

        <button >Submit</button>
          </div>
      </div>
      </div>
    </form>
  );
}
