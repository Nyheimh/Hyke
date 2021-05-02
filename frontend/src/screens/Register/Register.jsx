import { useState } from "react";
import './Register.css'

export default function Register(props) {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    // confirm: "",
  });

  const { name, username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className ="register"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3 className="register-title"> Register </h3>
      <br/>
      <label>
        Name:
        <input
          placeholder = "Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Username:
        <input
          placeholder = "Username"
          type="text"
          name="username"
          value={username}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Email:
        <input
          placeholder= "Email Address"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Password:
        <input
          placeholder= "Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <br/>
      {/* <label> Confirm Password:
        <input type="password" name="confirm password" value={confirm} onChange={handleChange} />
        
      </label> */}
      <button>Submit</button>
    </form>
  );
}
