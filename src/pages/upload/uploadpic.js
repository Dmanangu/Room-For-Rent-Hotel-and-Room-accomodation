import React from "react";
import { Link } from "react-router-dom";
import "./uploadpic.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UploadImages from "./image-upload.component";

export class Upload extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="sideUpic leftUpic">
          <div className="headerUpic">Room For Rent</div>
          <div className="detailsUpic">
            Next, let's add some photos of your place
          </div>
        </div>
        <div className="sideSpec rightSpec">
          <div className="containerUpic">
            <h1>Upload Pictures</h1>

            <div className="contentUpic">
              <UploadImages />
            </div>
          </div>

          <div className="footerUpic">
            <Link to="/Specialty">
              <button type="button" className="btnbackUpic">
                Back
              </button>
            </Link>
            <Link to="/Placedescription">
              <button type="button" className="btnnextUpic">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
