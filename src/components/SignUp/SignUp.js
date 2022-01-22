import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./signup.scss";
import useAuth from "../../hooks/useAuth";

const SignUp = () => {
  const { EmailPasswordSignup } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      EmailPasswordSignup(email, password);
    } else {
      alert("Password Not Match Please Try Again!");
    }
  };
  const handleDisplayChange = (event) => {
    setDisplayName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an Account</h2>
      <span>Signup with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          onChange={handleDisplayChange}
          name="displayName"
          value={displayName}
          label="Display Name"
        />
        <FormInput
          type="email"
          onChange={handleEmailChange}
          name="email"
          value={email}
          label="Email"
        />
        <FormInput
          type="password"
          onChange={handlePasswordChange}
          name="password"
          value={password}
          label="Password"
        />
        <FormInput
          type="password"
          onChange={handleConfirmChange}
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
        />
        <CustomButton type="submit">Signup</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
