import React from "react";
import "./host.css";
import { Link } from "react-router-dom";

export class Host extends React.Component {
  render() {
    return (
      <div className="base-containterH">
        <div className="sideH leftH">
          <div className="headerH">Room For Rent</div>
          <div className="detailsH">What kind of place will you host?</div>
        </div>
        <div className="sideH rightH">
          <div className="form-groupH">
            <button type="button" className="btnH">
              Apartment
            </button>
            <button type="button" className="btnH">
              House
            </button>
            <button type="button" className="btnH">
              Secondary Unit
            </button>
            <button type="button" className="btnH">
              Bed and breakfast
            </button>
            <button type="button" className="btnH">
              Boutique Hotel
            </button>
          </div>
          <div className="footerH">
            <Link to="/Rentalplace">
              <button type="button" className="btnnextH">
                Next
              </button>
            </Link>
            <Link to="/">
              <button type="button" className="btnnextH">
                Cancel
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
