import React from "react";
import mapboxgl from "mapbox-gl";
import "./maps.css";
import { Link } from "react-router-dom";

mapboxgl.accessToken =
  "pk.eyJ1Ijoicm9vbWZvcnJlbnQiLCJhIjoiY2t3a2JueTF1MHh0aTJ3cXY0bjNocmZsZCJ9.jXzlIrtHZT-hz7KYydJixw";

export class Maps extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      lng: 120.91867,
      lat: 14.9543,
      zoom: 14,
    };
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }

  render() {
    return (
      <div className="content-maps">
        <header className="header-maps">
          <div className="head-maps">Room for Rent</div>
        </header>
        <div className="btn-maps">
          <Link to="/ListingRoom">
            <button type="button" className="btnback">
              Back
            </button>
          </Link>
          <Link to="/Summary">
            <button type="button" className="btn-save">
              Continue
            </button>
          </Link>
        </div>
        <div className="body-maps">
          <div ref={this.mapContainer} className="map-container" />
        </div>
      </div>
    );
  }
}
