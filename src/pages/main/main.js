import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import image from "../../assets/images/image3.jpg";

const SpecialtyPage = () => (
  <div>
    <h1>Specialty Page</h1>
  </div>
);

export class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="base-container">
          <div className="sideMain leftMain">
            <Link to="/" className="linkMain">
              <div className="headerMain">Room For Rent</div>
            </Link>
            <div className="detailsMain">
              Hosting makes RoomforRent, RoomforRent
            </div>
          </div>
        </div>
        <div className="sideMain rightMain">
          <container className="conMain">
            <div className="imageMain">
              <img src={image} className="rimageMain" alt="Background" />
            </div>
          </container>

          <div className="topgapMain">
            <Link to="/Host">
              <button type="button" className="btnMain">
                Try hosting
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
