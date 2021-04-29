import { useState } from "react";

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3> Sign Up </h3>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>

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
        Email:
        <input
          type="text"
          name="email"
          value={email}
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
      <button>Submit</button>
    </form>
  );
}
