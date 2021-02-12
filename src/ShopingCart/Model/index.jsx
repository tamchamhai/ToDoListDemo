import React, { Component } from "react";

export default class CartModel extends Component {
  handleDecreaseAmountProduct = (index) => {
    let { cartList } = this.props;
    // let count = cartList[index].productAmount;
    if (cartList[index].productAmount === 1) {
      cartList.splice(index, 1);
    } else {
      cartList[index].productAmount--;
    }
    // Truyền props
    this.props.handleDecreaseAmountProduct(cartList);
  };
  handleIncreaseAmountProduct = (index) => {
    let { cartList } = this.props;
    // let count = cartList[index].productAmount;
    cartList[index].productAmount++;
    // Truyền props
    this.props.handleIncreaseAmountProduct(cartList);
  };
  handleDeleteProduct = (index) => {
    let { cartList } = this.props;
    cartList.splice(index, 1);
    this.props.handleDeleteProduct(cartList);
  };
  renderCartList = () => {
    const { cartList } = this.props;
    console.log(cartList);
    return cartList.map((item, index) => {
      return (
        <tr key={index}>
          <th>{index + 1}</th>
          <th>{item.model}</th>
          <th>
            <img src={item.src} width={50} />
          </th>
          <th>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDecreaseAmountProduct(index)}
            >
              -
            </button>
            {item.productAmount}
            <button
              className="btn btn-success"
              onClick={() => this.handleIncreaseAmountProduct(index)}
            >
              +
            </button>
          </th>
          <th>{item.price} vnd</th>
          <th>{item.price * item.productAmount} vnd</th>
          <th>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDeleteProduct(index)}
            >
              Delete
            </button>
          </th>
        </tr>
      );
    });
  };
  handleTotalCost = () => {
    const { cartList } = this.props;
    let totalCost = 0;
    cartList.map((item) => {
      totalCost += item.price * item.productAmount;
    });
    console.log(totalCost);
    return totalCost;
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        aria-labelledby="modelTitleId"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: 1000 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Your Cart</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Product Id</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Quatity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>{this.renderCartList()}</tbody>
              </table>
              <p>Total Cost: {this.handleTotalCost()} vnd</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
