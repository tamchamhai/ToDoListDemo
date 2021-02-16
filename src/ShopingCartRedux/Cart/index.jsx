import React, { Component } from "react";
import { connect } from "react-redux";

class Cart extends Component {
  numberProduct = () => {
    const { numberProduct } = this.props;
    let count = 0;
    numberProduct.map((item) => {
      count += item.productAmount;
      // console.log(item.productAmount);
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
          Giỏ hàng ({this.numberProduct()})
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    numberProduct: state.shopingCartReducer.cartList,
  };
};

export default connect(mapStateToProps, null)(Cart);
