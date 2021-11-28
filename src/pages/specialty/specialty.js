import React from "react";
import "./specialty.css";
import { Link } from "react-router-dom";

export class Specialty extends React.Component {
  render() {
    return (
      <div className="base-containterSpec">
        <div className="sideSpec leftSpec">
          <div className="headerSpec">Room For Rent</div>
          <div className="detailsSpec"> Where is your place located?</div>
        </div>
        <div className="sideSpec rightSpec">
          <div className="topgapSpec">
            <div className="form-groupSpec">
              <label htmlFor="amenities">
                Do you have any standout amenities
              </label>
              <input
                type="text"
                name="amenities"
                className="firstInpSpec"
                placeholder="pool, hot tub, excercise equipment"
              />
            </div>
            <div className="form-groupSpec">
              <label htmlFor="guestfavorite">
                What about these guest favorites
              </label>
              <input
                type="text"
                name="guestfavorite"
                className="secondInpSpec"
                placeholder="wifi, tv, aircondition, free parking"
              />
            </div>
            <div className="form-groupSpec">
              <label htmlFor="safetyitems">
                Have any of these safety items?
              </label>
              <input
                type="text"
                name="safetyitems"
                className="thirdInpSpec"
                placeholder="first aid kit, fire extinguisher, smoke alarm"
              />
            </div>
          </div>
          <div className="footerSpec">
            <Link to="/Guestnumber">
              <button type="button" className="btnbackSpec">
                Back
              </button>
            </Link>
            <Link to="/Upload">
              <button type="button" className="btnnextSpec">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
