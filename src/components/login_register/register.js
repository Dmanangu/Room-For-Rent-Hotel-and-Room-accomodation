import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import images from "../../assets/images/images.jpg";
import "./register.css";

export class Register extends React.Component {
  render() {
    return (
      <div className="contentRegister">
        <div className="sideRegister rightRegister">
          <div className="centerRegister">
            <div className="picLogo">
              <img src={logo} className="logoRegister" alt="Logo" />
            </div>
            <div className="signtxtRegister">Sign Up</div>

            <div className="nameaddRegister">
              <input
                type="text"
                name="name"
                className="nameRegister"
                placeholder="Name"
              />
            </div>

            <div className="emailaddRegister">
              <input
                type="email"
                name="password"
                className="emailRegister"
                placeholder="Email"
              />
            </div>

            <div className="addressRegister">
              <input
                type="text"
                name="email"
                className="addRegister"
                placeholder="Address"
              />
            </div>

            <div className="phoneaddRegister">
              <input
                type="tel"
                name="password"
                className="numberRegister"
                placeholder="Phone Number"
              />
            </div>

            <div className="passaddRegister">
              <input
                type="password"
                name="email"
                className="passRegister"
                placeholder="Password"
              />
            </div>

            <div className="confpassRegister">
              <input
                type="password"
                name="password"
                className="confirmRegister"
                placeholder="Confirm Password"
              />
            </div>

            <div className="btnRegister">
              <button type="button" className="logRegister">
                <div className="logbtnRegister"> Sign Up </div>
              </button>
            </div>
            <div className="signupRegister">
              <Link to="/Login">
                <button type="button" className="supRegister">
                  <div className="signRegister">
                    {" "}
                    Already Have an Account? Sign In{" "}
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="sideRegister leftRegister">
          <div className="leftpicRegister">
            <Link to="/">
              <img src={images} className="imageleftRegister" alt="letrato" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
