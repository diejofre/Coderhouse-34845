import React from "react";
import useInput from "./useInput";

const Form = ({ name }) => {
  const email = useInput("");
  const password = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email:", email.value);
    console.log("password:", password.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Header name={name}>Form</Header>
      <input placeholder="email" {...email} />
      <input type="password" placeholder="password" {...password} />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Form;
