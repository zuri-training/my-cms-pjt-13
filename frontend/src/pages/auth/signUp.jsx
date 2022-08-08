import { useState } from "react";
import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";

import axios from "../../axios";
const postData = async (data) => {
  const response = await axios.post("/posts", data);
  console.log(response);
};

const SignUp = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleGoogleLogin = (googleData) => {
    console.log(googleData);
  };

  const handleGoogleLoginFailure = (result) => {
    console.log(result);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const data = { title: fullname, body: email, userId: 1 };
    postData(data);
    setEmail("");
    setFullname("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <main className="sign-up-wrapper">
        <div className="sign-up-icon">
          <img
            src={require("../../assets/images/Logo.png")}
            alt=""
            className="thirtin-logo"
          />
          <img
            src={require("../../assets/images/favicon.png")}
            alt=""
            className="coloured-thirtin-logo"
          />
        </div>
        <div className="sign-up-form">
          <h3>Sign Up</h3>
          <form className="w-100">
            <div className="w-100 align-center">
              <p>Full name</p>
              <input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                className="input-1"
                type="text"
                placeholder="Enter full name"
              />
            </div>
            <div className="w-100 align-center">
              <p>Email</p>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-1"
                type="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="w-100 align-center">
              <p>Password</p>
              <div className="input">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Enter Password"
                />
                <img
                  src={require("../../assets/images/view-password-icon.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="w-100 align-center">
              <p>Confirm Password</p>
              <div className="input">
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  value={confirmPassword}
                  type="password"
                  placeholder="Enter Password"
                />
                <img
                  src={require("../../assets/images/view-password-icon.png")}
                  alt=""
                />
              </div>
            </div>
            <button type="submit" onClick={handleSignUp}>
              Sign Up
            </button>
            <h5>
              Already have an account?<Link to="/login">Login</Link>
            </h5>
          </form>
        </div>
        <h4>Or Sign up with</h4>
        <div className="google-wrapper">
          <GoogleLogin
            className="google"
            buttonText="Login with Google"
            onSuccess={handleGoogleLogin}
            onFailure={handleGoogleLoginFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div className="sign-up-method mgt-48">
          <div>
            <img
              src={require("../../assets/images/linkedin-icon.png")}
              alt=""
            />
          </div>
          <div>
            <h6>Login with Linkedin</h6>
          </div>
        </div>
      </main>
    </div>
  );
};
export default SignUp;
