import React from "react";
import "./guestnumber.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Row, Col, Container } from "react-bootstrap";

export class Guestnumber extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guest: 0,
      beds: 0,
      bedrooms: 0,
      bathrooms: 0,
      show: true,
    };
  }

  IncrementItemG = () => {
    this.setState({ guest: this.state.guest + 1 });
  };
  DecreaseItemG = () => {
    if (this.state.guest !== 0) this.setState({ guest: this.state.guest - 1 });
  };
  ToggleClickG = () => {
    this.setState({ show: !this.state.show });
  };

  IncrementItemB = () => {
    this.setState({ beds: this.state.beds + 1 });
  };
  DecreaseItemB = () => {
    if (this.state.beds !== 0) this.setState({ beds: this.state.beds - 1 });
  };
  ToggleClickB = () => {
    this.setState({ show: !this.state.show });
  };

  IncrementItemBR = () => {
    this.setState({ bedrooms: this.state.bedrooms + 1 });
  };
  DecreaseItemBR = () => {
    if (this.state.bedrooms !== 0)
      this.setState({ bedrooms: this.state.bedrooms - 1 });
  };
  ToggleClickBR = () => {
    this.setState({ show: !this.state.show });
  };

  IncrementItemBT = () => {
    this.setState({ bathrooms: this.state.bathrooms + 1 });
  };
  DecreaseItemBT = () => {
    if (this.state.bathrooms !== 0)
      this.setState({ bathrooms: this.state.bathrooms - 1 });
  };
  ToggleClickBT = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="base-containterGN">
        <div className="sideGN leftGN">
          <div className="headerGN"> Room For Rent </div>
          <div className="detailsGN">
            {" "}
            How many guest would you like to welcome?
          </div>
        </div>
        <div className="sideGN rightGN">
          <div className="topgapGN">
            <div className="form-groupGuestGN">
              <Container>
                <Row xs={12}>
                  <Col xs={2}></Col>
                  <Col xs={1}>
                    <label htmlFor="username">Guest</label>{" "}
                  </Col>
                  <Col xs={4}></Col>
                  <Col xs={1}>
                    <button className="minbtnGN" onClick={this.DecreaseItemG}>
                      <h2>-</h2>
                    </button>
                  </Col>
                  <Col xs={1}>
                    <h4>{this.state.guest}</h4>
                  </Col>
                  <Col xs={1}>
                    <button className="addbtnGN" onClick={this.IncrementItemG}>
                      <h2>+</h2>
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="form-groupBedsGN">
              <Container>
                <Row xs={12}>
                  <Col xs={2}></Col>
                  <Col xs={1}>
                    <label htmlFor="username">Beds</label>
                  </Col>
                  <Col xs={4}></Col>
                  <Col xs={1}>
                    <button className="minbtnGN" onClick={this.DecreaseItemB}>
                      <h2>-</h2>
                    </button>
                  </Col>
                  <Col xs={1}>
                    <h4>{this.state.beds}</h4>
                  </Col>
                  <Col xs={1}>
                    <button className="addbtnGN" onClick={this.IncrementItemB}>
                      <h2>+</h2>
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="form-groupBedroomsGN">
              <Container>
                <Row xs={12}>
                  <Col xs={2}></Col>
                  <Col xs={1}>
                    <label htmlFor="username">Bedrooms</label>
                  </Col>
                  <Col xs={4}></Col>
                  <Col xs={1}>
                    <button className="minbtnGN" onClick={this.DecreaseItemBR}>
                      <h2>-</h2>
                    </button>
                  </Col>
                  <Col xs={1}>
                    <h4>{this.state.bedrooms}</h4>
                  </Col>
                  <Col xs={1}>
                    <button className="addbtnGN" onClick={this.IncrementItemBR}>
                      <h2>+</h2>
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="form-groupBathroomsGN">
              <Container>
                <Row xs={12}>
                  <Col xs={2}></Col>
                  <Col xs={1}>
                    <label htmlFor="username">Bathrooms </label>
                  </Col>
                  <Col xs={4}></Col>
                  <Col xs={1}>
                    <button className="minbtnGN" onClick={this.DecreaseItemBT}>
                      <h2>-</h2>
                    </button>
                  </Col>
                  <Col xs={1}>
                    <h4>{this.state.bathrooms}</h4>
                  </Col>
                  <Col xs={1}>
                    <button className="addbtnGN" onClick={this.IncrementItemBT}>
                      <h2>+</h2>
                    </button>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="footerGN">
            <Link to="/Address">
              <button type="button" className="btnbackGN">
                Back
              </button>
            </Link>
            <Link to="/Specialty">
              <button type="button" className="btnnextGN">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
