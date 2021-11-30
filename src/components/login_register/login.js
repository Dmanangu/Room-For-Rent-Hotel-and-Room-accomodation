import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import image2 from "../../assets/images/image2.jpg";
import "./login.css";

export class Login extends React.Component {
  render() {
    return (
      <div className="contentLogin">
        <div className="sideLogin rightLogin">
          <div className="centerLogin">
            <div className="picLogo">
              <img src={logo} className="logoLogin" alt="Logo" />
            </div>
            <div className="signtxtLogin">Sign In</div>

            <div className="emailaddLogin">
              <input
                type="email"
                name="email"
                className="emailLogin"
                placeholder="Email address"
              />
            </div>
            <div className="passwordLogin">
              <input
                type="password"
                name="password"
                className="passLogin"
                placeholder="Password"
              />
            </div>
            <div className="btnLogin">
              <button type="button" className="logLogin">
                <div className="logbtnLogin"> Login </div>
              </button>
            </div>
            <div className="signupLogin">
              <Link to="/Register">
                <button type="button" className="supLogin">
                  <div className="signLogin">
                    {" "}
                    Don't Have any Account? Sign Up{" "}
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="sideLogin leftLogin">
          <div className="leftpicLogin">
            <Link to="/">
              <img src={image2} className="imageleftLogin" alt="letrato" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
