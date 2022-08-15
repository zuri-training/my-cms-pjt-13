import { useState } from "react";
import GoogleLogin from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Password from "../../components/password";
import { postData } from "./signUp";

const Login = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");

  const handleGoogleLogin = () => {
    console.log("success");
  };

  const handleGoogleLoginFailure = () => {
    console.log("failed");
  };

  const handleLogin = () => {
    const data = { title: fullname, body: fullname, userId: 1 };
    postData(data);
    navigate("/dashboard", { state: { userDetails: { fullname } } });
    setFullname("");
  };

  return (
    <div className="login-page d-flex">
      <div className="login-sidebar">
        <img
          className="thirtin-logo"
          src={require("../../assets/images/Logo.png")}
          alt=""
        />
        <img
          className="coloured-thirtin-logo"
          src={require("../../assets/images/favicon.png")}
          alt=""
        />
      </div>
      <main>
        <div className="component-btn"> <Button /> </div>
        <div className="login-box">
          <div >
          <div className="login-text">
            <h1 className="login">Login</h1>
          </div>

          <form action="" className="myForm">
            <div className="firstname-field">
              <div>
                <label htmlFor="fullname" className="fullname-text">
                  Full name
                </label>
              </div>
              <div className="w-100">
                <input
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  type="text"
                  name="fullname"
                  className="fullname"
                  placeholder="Enter full name"
                />
              </div>
              <div>
                <p className="error"></p>
              </div>
            </div>

            <div className="frame22">
              <div className="confirm-password-field">
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="confirmPassword-text"
                  >
                    Confirm Password
                  </label>
                </div>
                <Password />
                <div>
                  <p className="error2"></p>
                </div>
              </div>
            </div>

            <div className="rmfp">
              <div className="remember-me">
                <div>
                  <input
                    type="checkbox"
                    name="remember me"
                    className="remember"
                    value="remember-me"
                  />
                </div>
                <div>
                  <label htmlFor="remember-me" className="rememberMe-text">
                    Remember Me
                  </label>
                </div>
              </div>

              <div>
                <Link
                  to="/forgot-password"
                  className="forgot-password no-break"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <div onClick={handleLogin} className="login-button">
              <p>Login</p>
            </div>
          </form>

          <div className="sign-up">
            <p>
              I don't have an account ?
              <Link to="/signup">Sign Up for free</Link>
            </p>
          </div>
        </div>

        <div className="login-with">
          <p>Or Login with</p>
        </div>

        <div className="google-and-linkedin">
          <div className="google-wrapper">
            <GoogleLogin
              buttonText="Login with Google"
              onSuccess={handleGoogleLogin}
              onFailure={handleGoogleLoginFailure}
              cookiePolicy={"single_host_origin"}
            />
          </div>

          <div className="linkedin">
            <div>
              <img
                src={require("../../assets/images/linkedin-icon.png")}
                alt="LinkedIn"
              />
            </div>
            <div>
              <button>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Login with LinkedIn
                </a>
              </button>
            </div>
          </div>
          </div>
         
        </div>
      </main>
    </div>
  );
};
export default Login;
