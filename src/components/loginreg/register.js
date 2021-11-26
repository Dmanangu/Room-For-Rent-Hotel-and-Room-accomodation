import React from "react";
import logoImg from "./pictures/logo.png"; //location of the logo
import Popup from "reactjs-popup"; //npm install reactjs-popup --save
import "reactjs-popup/dist/index.css";

export class Register extends React.Component {
  state = {
    checkbox: "",
    checkboxValid: false,
    errorMsg: {},
    selectedCheckBox: 0,
  };

  validateForm = () => {
    const { checkboxValid } = this.state;
    this.setState({
      formValid: checkboxValid,
    });
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container">
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={logoImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Address</label>
              <input type="text" name="Address" placeholder="Address" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Mobile Number</label>
              <input type="tel" id="phone" placeholder="+63" country={"ph"} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="checkbox">
              <input type="checkbox" />
              <label htmlFor="checkbox">
                I agree in the terms and conditions
              </label>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
        <div className="About">
          <Popup
            trigger={
              <button type="button" className="about">
                About
              </button>
            }
            position="left"
          >
            <div>About Application</div>
          </Popup>
        </div>
      </div>
    );
  }
}
