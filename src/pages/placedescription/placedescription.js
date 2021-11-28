import React from "react";
import "./placedescription.css";
import { Link } from "react-router-dom";

export class Placedescription extends React.Component {
  render() {
    return (
      <div className="base-containter">
        <div className="sidePD leftPD">
          <div className="headerPD">Room For Rent</div>
          <div className="detailsPD">
            Let's give your place a name and let's describe your place
          </div>
        </div>
        <div className="sidePD rightPD">
          <div className="form-groupPD">
            <label htmlFor="title">Create your title</label>
            <input type="text" name="title" className="titlePD" />
          </div>
          <div className="form-groupPD">
            <label htmlFor="description">Create your description</label>
            <input type="text" name="description" className="desPD" />
          </div>
          <div className="footerPD">
            <Link to="/Maps">
              <button type="button" className="btnbackPD">
                Back
              </button>
            </Link>
            <Link to="/Pricing">
              <button type="button" className="btnnextPD">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
