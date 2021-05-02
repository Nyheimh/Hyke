import { useState } from "react";
import { Link } from "react-router-dom";

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
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="login"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3 className="login-title"> Login </h3>

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>

      {/* <label> Confirm Password:
        <input type="password" name="confirm password" value={confirm} onChange={handleChange} />
        
      </label> */}
      <Link to='/register'>Register</Link>
      <button>Submit</button>
    </form>
  );
}
