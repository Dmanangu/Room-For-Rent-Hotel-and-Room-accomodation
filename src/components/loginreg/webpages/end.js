import React from "react";
import { Link } from "react-router-dom";

export class End extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        End
        <div className="footer">
          <Link to="/Summary">
            <button type="button" className="btnback">
              Back
            </button>
          </Link>
          <Link to="/">
            <button type="button" className="btn-save">
              Save
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
