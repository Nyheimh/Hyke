import { useState } from "react";
import {Link} from "react-router-dom"

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, username, email, password, confirmPassword } = formData;
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      [name]: value
    }))
  }

  return (
    <form>
      <h3> Start Hyking </h3>
      <label> Name:
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>

      <label> Username:
        <input type="text" name="username" value={username} onChange={handleChange} />
      </label>

      <label> Email:
        <input type="text" name="email" value={email} onChange={handleChange} />
      </label>

      <label> Password:
        <input type="password" name="password" value={password} onChange={handleChange} />
      </label>

      <label> Confirm Password:
        <input type="password" name="confirm password" value={confirmPassword} onChange={handleChange} />
      </label>
      <button>Submit</button>
    </form>
  );
}
