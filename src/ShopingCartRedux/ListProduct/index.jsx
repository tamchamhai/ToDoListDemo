import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addSelectedProduct,
  addToCart,
} from "../../redux/action/shopingCartAction";

class ListProduct extends Component {
  handleSelectedProduct = (item) => {
    this.props.addSelectedProduct(item);
  };
  handleAddToCart = (item) => {
    this.props.addToCart(item);
  };
  renderListProduct = () => {
    const { ListProduct } = this.props;
    console.log(ListProduct);
    return ListProduct.map((item, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <div className="card">
            <img className="card-img-top" src={item.src} alt="img product" />
            <div className="card-body">
              <h4 className="card-title">{item.model}</h4>
              <button
                className="btn btn-success"
                onClick={() => {
                  this.handleSelectedProduct(item);
                }}
              >
                Details
              </button>
              <button
                className="btn btn-danger"
                onClick={() => {
                  this.handleAddToCart(item);
                }}
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
        <div className="row">{this.renderListProduct()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ListProduct: state.shopingCartReducer.productList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addSelectedProduct: (product) => {
      dispatch(addSelectedProduct(product));
    },
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
