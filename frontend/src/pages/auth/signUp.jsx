import { useState } from "react";
import GoogleLogin from "react-google-login";
import { Link, useNavigate } from "react-router-dom";

import axios from "../../axios";
import Button from "../../components/Button";
export const postData = async (data) => {
  const response = await axios.post("/posts", data);
  console.log(response);
};

const SignUp = ({image}) => {
  const navigate = useNavigate();
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
    navigate("/dashboard", { state: { userDetails: { fullname } } });
    setEmail("");
    setFullname("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div>
      <div className="sign-up-wrapper">
        <div className="left-flex">
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
        </div>
        <div className="right-flex">
          <div className="component-btn"> <Button /> </div>
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
                <h1 className="password-requirements">
                  Password must contain upper case, Lower case, number and a
                  special character
                </h1>
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
              <button onClick={handleSignUp} type="submit" className="signup">
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
        </div>
      </div>
    </div>
  );
};
export default SignUp;
