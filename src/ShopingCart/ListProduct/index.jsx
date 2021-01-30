import React, { Component } from "react";

export default class ListProduct extends Component {
  handleShowDetails = (item) => {
    this.props.handleShowDetails(item);
  };
  handleAddToCart = (item) => {
    const listProductCart = { ...item };
    this.props.handleAddToCart(listProductCart);
    console.log(listProductCart);
  };
  renderProductList = () => {
    const { ProductList } = this.props;
    return ProductList.map((item, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <div className="card">
            <img className="card-img-top" src={item.src} alt="product img" />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <button
                className="btn btn-success"
                onClick={() => this.handleShowDetails(item)}
              >
                Details
              </button>
              <button
                className="btn btn-danger"
                onClick={() => this.handleAddToCart(item)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container danh-sach-san-pham">
        <div className="row">{this.renderProductList()}</div>
      </div>
    );
  }
}
