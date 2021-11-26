import React from "react";
import {
  Main,
  Address,
  Guestnumber,
  Guestspace,
  Host,
  Specialty,
  Placedescription,
  Pricing,
  HomePage,
  Rentalplace,
  Upload,
  Maps,
  Login,
  Register,
  ListingRoom,
  Summary,
  End,
} from "./loginreg/exports.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const HostPage = () => (
  <div>
    <h1>Try Hosting</h1>
  </div>
);

export class Pages extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/Main" element={<Main />} />
            <Route exact path="/Host" element={<Host />} />
            <Route exact path="/Rentalplace" element={<Rentalplace />} />
            <Route exact path="/Guestspace" element={<Guestspace />} />
            <Route exact path="/Address" element={<Address />} />
            <Route exact path="/Guestnumber" element={<Guestnumber />} />
            <Route exact path="/Specialty" element={<Specialty />} />
            <Route exact path="/Upload" element={<Upload />} />
            <Route exact path="/Maps" element={<Maps />} />
            <Route
              exact
              path="/Placedescription"
              element={<Placedescription />}
            />
            <Route exact path="/Pricing" element={<Pricing />} />
            <Route exact path="/ListingRoom" element={<ListingRoom />} />
            <Route exact path="/Summary" element={<Summary />} />
            <Route exact path="/End" element={<End />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
