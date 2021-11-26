import React from "react";
import entire_home from "../pictures/entire_home.png";
import pets from "../pictures/pets.png";
import unique_place from "../pictures/unique_place.png";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import "./homepage.css";

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="home-page">
        <header className="head-hp">
          <div className="header-hp">Room for Rent</div>

          <div className="headbtn-hp">
            <Link to="/">
              <button type="button" className="home-hp">
                <div className="homeText"> Home </div>
              </button>
            </Link>
            <button type="button" className="about-hp">
              <div className="aboutText"> About </div>
            </button>
            <button type="button" className="contact-hp">
              <div className="contText"> Contact </div>
            </button>
          </div>

          <div className="headbtnn-hp">
            <Link to="/Main">
              <button type="button" className="host-hp">
                <div className="becomText">Become a host</div>
              </button>
            </Link>
            <Link to="/Login">
              <button type="button" className="userlogin-hp">
                <div className="useText"> User Login</div>
              </button>
            </Link>
          </div>
        </header>

        <body className="body-hp">
          <div className="bodybtn-hp">
            <Navbar>
              <NavDropdown
                className="firstdrop"
                title="Location"
                id="loc"
                renderMenuOnMount={true}
              >
                <button type="button" className="location-hp">
                  Where are you going?
                </button>
              </NavDropdown>
              <NavDropdown
                className="seconddrop"
                title="Check in"
                id="chkin"
                renderMenuOnMount={true}
              >
                <button type="button" className="check-in-hp">
                  Add dates
                </button>
              </NavDropdown>
              <NavDropdown
                className="thirddrop"
                title="Check out"
                id="chkout"
                renderMenuOnMount={true}
              >
                <button type="button" className="check-out-hp">
                  Add dates
                </button>
              </NavDropdown>
              <NavDropdown
                className="fourthdrop"
                title="Guest"
                id="gst"
                renderMenuOnMount={true}
              >
                <button type="button" className="guest-hp">
                  Add guest
                </button>
              </NavDropdown>
            </Navbar>
          </div>
        </body>

        <div className="footer-hp">
          <div className="Uhp">
            <container className="conU">
              <div className="image-unique">
                <img src={unique_place} className="U-hp" alt="Unique" />
              </div>
            </container>
            <div className="contentU-hp">
              <div className="text-U">Unique stay</div>
            </div>
          </div>
          <div className="Php">
            <container className="conP">
              <div className="image-pets">
                <img src={pets} className="P-hp" alt="Pet" />
              </div>
            </container>
            <div className="contentP-hp">
              <div className="text-P">Pets allowed</div>
            </div>
          </div>
          <div className="Hhp">
            <container className="conH">
              <div className="image-entire">
                <img src={entire_home} className="H-hp" alt="Entire" />
              </div>
            </container>
            <div className="contentH-hp">
              <div className="text-H">Entire homes</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
