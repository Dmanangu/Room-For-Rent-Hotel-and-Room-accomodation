import React from "react";
import { Link } from "react-router-dom";
import "./rentalplace.css";

export class Rentalplace extends React.Component {
  render() {
    return (
      <div className="base-containterRP">
        <div className="sideRP leftRP">
          <div className="headerRP">Room For Rent</div>
          <div className="detailsRP">
            Which of these best describes your place
          </div>
        </div>
        <div className="sideRP rightRP">
          <div className="form-groupRP">
            <Link to="/Guestspace">
              <button type="button" className="rentalRP">
                Rental Unit
              </button>
            </Link>
            <Link to="/Guestspace">
              <button type="button" className="loftRP">
                Loft
              </button>
            </Link>
            <Link to="/Guestspace">
              <button type="button" className="condoRP">
                Condominium
              </button>
            </Link>
          </div>
          <div className="footer">
            <Link to="/Host">
              <button type="button" className="btnbackRP">
                Back
              </button>
            </Link>
            <Link to="/Guestspace">
              <button type="button" className="btnnextRP">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Rentalplace;
