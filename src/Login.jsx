import axios from "axios";
import { useState } from "react";
import { LogoutLink } from "./LogoutLink";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login" className="form-container">
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input name="password" type="password" id="password" />
        </div>
        <button type="submit">Login</button>
      </form>
      {jwt && <LogoutLink />}
      <div>
        <img
          src="https://i.cdn.turner.com/cnn/2009/SHOWBIZ/Movies/12/11/princess.frog.parents/t1larg.princess.disney.jpg"
          alt="Description of the image"
          style={{ width: "900px", height: "auto" }}
        />
      </div>
    </div>
  );
}
