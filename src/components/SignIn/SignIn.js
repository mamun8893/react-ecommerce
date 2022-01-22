import React, { useState } from "react";
import "./signin.style.scss";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import useAuth from "../../hooks/useAuth";

const SignIn = () => {
  const { googleSignin, emailPasswordSignin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSbmit = (event) => {
    event.preventDefault();
    emailPasswordSignin(email, password);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <p>Sign in with your email and password</p>
      <form onSubmit={handleSbmit}>
        <FormInput
          type="email"
          name="email"
          onChange={handleChangeEmail}
          value={email}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          onChange={handleChangePassword}
          value={password}
          label="Password"
          required
        />
        <div className="button-group">
          <CustomButton type="submit">submit form</CustomButton>
          <CustomButton onClick={googleSignin} isGoogleBtn>
            Google Signin
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
