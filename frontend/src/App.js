import React from "react";
import Success from "./Success";
import "./App.css";

function App() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSucces] = React.useState(false);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const body = {
      name,
      password,
    };
    fetch("http://localhost:8000/api/login", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.message === "true") {
          setSucces(true);
        } else {
          setSucces(false);
          setError("Invalid Credentials");
        }
      })
      .catch((error) => {
        setSucces(false);
        setError("Something went worng..");
      });
  };

  return (
    <div className="container">
      {success ? (
        <Success setSucces={setSucces} />
      ) : (
        <div>
          <h1 style={{ fontSize: "4rem" }}>Login</h1>
          {error && <p>{error}</p>}
          <input
            value={name}
            onChange={handleChangeName}
            type="text"
            placeholder="name"
          />
          <input
            value={password}
            onChange={handleChangePassword}
            placeholder="password"
            type="password"
          />
          <button onClick={handleLogin}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default App;
