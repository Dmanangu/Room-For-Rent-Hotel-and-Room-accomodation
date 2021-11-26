import React from "react";
import { Link } from "react-router-dom";

export class Summary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Summary
        <div className="footer">
          <Link to="/ListingRoom">
            <button type="button" className="btnback">
              Back
            </button>
          </Link>
          <Link to="/End">
            <button type="button" className="btn-save">
              Save
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
