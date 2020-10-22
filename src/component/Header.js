import React, { Fragment, Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ownStyle.css";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
        <Navbar className="navbar" variant="dark">
          <Navbar.Brand href="https://moviedo.netlify.app">
            <span
              style={{
                color: "black",
                fontWeight: "bolder",
                letterSpacing: "4px",
                fontSize: "50px",
                fontFamily: "cursive",
              }}
            >
              MovieGo ~{" "}
              <span style={{ fontSize: "40px" }}>Movie Reviews App</span>
            </span>
          </Navbar.Brand>
        </Navbar>
      </Fragment>
    );
  }
}
