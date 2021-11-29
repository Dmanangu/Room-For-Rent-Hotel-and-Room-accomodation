import React from "react";
import { Link } from "react-router-dom";
import "./listing.room.css";

export class ListingRoom extends React.Component {
  render() {
    return (
      <div className="base-containter-ls">
        <div className="side-ls left-ls">
          <div className="header-ls">Room for Rent</div>
          <div className="details-ls">Check out your listing!</div>
        </div>
        <div className="side-ls right-ls">
          <div className="listing-ls">YOURLIST</div>
          <div className="footer-ls">
            <Link to="/Pricing">
              <button type="button" className="btnback-ls">
                Back
              </button>
            </Link>
            <Link to="/Maps">
              <button type="button" className="btn-save-ls">
                Save
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
