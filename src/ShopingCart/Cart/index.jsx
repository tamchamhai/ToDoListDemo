import React, { Component } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

export default class Cart extends Component {
  countProduct = () => {
    const { cartList } = this.props;
    let count = 0;
    cartList.map((item) => {
      count += item.productAmount;
    });
    return count;
  };
  render() {
    return (
      <div className="container text-center my-2">
        <button
          className="btn btn-danger "
          data-toggle="modal"
          data-target="#modelId"
        >
          Your Cart ({this.countProduct()})
        </button>
      </div>
    );
  }
}
