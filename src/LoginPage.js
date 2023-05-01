import React, { useState } from "react";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredName === "" || enteredPassword === "") {
      setError("Please enter both a username and a password");
    } else if (enteredName !== "james") {
      setError("Invalid username");
    } else if (enteredPassword !== "123456789") {
      setError("Invalid password");
    } else {
      // if username and password are valid, redirect to orders page
      window.location.href = "/orders";
    }

    setEnteredName("");
    setEnteredPassword("");
  };

  return (
    <>
      <h1>Login Page</h1>
      <div className={classes.container}>
        {error && <p className={classes.error}>{error}</p>}
        <form onSubmit={submitHandler} className={classes.form}>
          <label htmlFor="username">Username :</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
            required
          />

          <label htmlFor="password">Password :</label>
          <input
            id="password"
            type="password"
            value={enteredPassword}
            required
            onChange={passwordChangeHandler}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
