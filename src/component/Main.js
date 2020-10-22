import React, { Component } from "react";

import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";

import "./ownStyle.css";

import data from "../data/data.json";

const newdata = data.map((data) => {
  return (
    <div
      class="card"
      style={{ backgroundColor: "lightsalmon" }}
      key={data.name}
    >
      <div
        class="card-header"
        style={{ textAlign: "center", fontWeight: 1000 }}
      >
        {data.name} <br></br> <a className="btn-dark">{data.rate}</a>
      </div>
      <div
        class="card-body"
        style={{ backgroundColor: "lightgoldenrodyellow" }}
      >
        <span
          style={{
            fontWeight: "bold",
            fontFamily: "monospace",
            fontSize: "15px",
          }}
        >
          {data.desc}
        </span>{" "}
      </div>
    </div>
  );
});

export default class Main extends Component {
  render() {
    return <CardColumns className="mt-2 mr-2 ml-2"> {newdata} </CardColumns>;
  }
}
