import React, { Component } from "react";

export default class Cart extends Component {
  render() {
    return (
      <div className="container text-center my-2">
        <button
          className="btn btn-danger "
          data-toggle="modal"
          data-target="#modelId"
        >
          Your Cart (0)
        </button>
      </div>
    );
  }
}
