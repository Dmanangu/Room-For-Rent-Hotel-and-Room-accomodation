import React from "react";
import "./address.css";
import { Link } from "react-router-dom";

export class Address extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-containterA">
        <div className="sideA leftA">
          <div className="headerA">Room For Rent</div>
          <div className="detailsA">Where's your place located?</div>
        </div>
        <div className="sideA rightA">
          <div className="form-groupA">
            <input
              type="address"
              name="address"
              className="addA"
              placeholder="Enter your address"
            />
          </div>
          <div className="footer">
            <Link to="/Guestspace">
              <button type="button" className="btnbackA">
                Back
              </button>
            </Link>
            <Link to="/Guestnumber">
              <button type="button" className="btnnextA">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
