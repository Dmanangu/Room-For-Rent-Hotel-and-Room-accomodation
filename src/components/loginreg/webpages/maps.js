import React from "react";
import { Link } from "react-router-dom";

export class Maps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Maps</h1>
        <div className="footerMap">
          <Link to="/Upload">
            <button type="button" className="btnbackMap">
              Back
            </button>
          </Link>
          <Link to="/Placedescription">
            <button type="button" className="btnnextMap">
              Next
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
