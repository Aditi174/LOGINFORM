import React, { useState } from "react";
import Label from "./Label";
import Input from "./Input";
import "../../CSSfiles/form.css";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const enteredEmail =
    email !== "" && (!email.includes("@") || !email.includes("."));

  const enteredPassword =
    password !== "" &&
    (password.length < 8 ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password));

  function handleSubmitForm(event: any) {
    event.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <>
      <form onSubmit={handleSubmitForm} className="form">
        <Label>Email</Label>
        <Input
          placeholder="Enter your email"
          type="text"
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="error">
          {enteredEmail && <p>Please enter a valid email</p>}
        </div>
        <Label>Password</Label>
        <Input
          placeholder="Enter your password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <div className="error">
          {enteredPassword && (
            <p>
              Password must be at least 8 characters long and contain an
              uppercase letter and a number
            </p>
          )}
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </>
  );
}

export default Form;
