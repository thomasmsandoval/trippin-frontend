import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input name="email" type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input name="password" type="password" id="password" />
        </div>
        <div>
          <label htmlFor="password_confirmation">Password confirmation:</label>
          <input name="password_confirmation" type="password" id="password_confirmation" />
        </div>
        <button type="submit">Signup</button>
      </form>
      <div>
        <img
          src="https://images.bauerhosting.com/legacy/empire-tmdb/films/10198/images/wC5xdlg6WceCWUXQzS3pIwTfkEJ.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80"
          alt="Description of the image"
          style={{ width: "900px", height: "auto" }}
        />
      </div>
    </div>
  );
}
