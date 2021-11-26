import React from "react";
import "./pricing.css";
import { Link } from "react-router-dom";

export class Pricing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-containter">
        <div className="sidePr leftPr">
          <div className="headerPr">Room For Rent</div>
          <div className="detailsPr">Now for the fun part set your price</div>
        </div>
        <div className="sidePr rightPr">
          <div className="form-groupPr">
            <input
              type="text"
              name="price"
              className="InputPr"
              placeholder="PRICE/NIGHT"
            />
          </div>
          <div className="footerPr">
            <Link to="/Placedescription">
              <button type="button" className="btnbackPr">
                Back
              </button>
            </Link>
            <Link to="/ListingRoom">
              <button type="button" className="btnnextPr">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
