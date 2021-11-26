import React from "react";
import "./guestspace.css";
import { Link } from "react-router-dom";

export class Guestspace extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-containterGS">
        <div className="sideGS leftGS">
          <div className="headerGS">Room For Rent</div>
          <h2 className="detailsGS">
            What kind of space will the guests have?
          </h2>
        </div>
        <div className="sideGS rightGS">
          <div className="form-groupGS">
            <button type="button" className="btnGS">
              An entire place
            </button>
            <button type="button" className="btnGS">
              A private room
            </button>
            <button type="button" className="btnGS">
              A shared Room
            </button>
          </div>
          <div className="footerGS">
            <Link to="/Rentalplace">
              <button type="button" className="btnbackGS">
                Back
              </button>
            </Link>
            <Link to="/Address">
              <button type="button" className="btnnextGS">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
