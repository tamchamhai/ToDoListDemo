import React, { Component } from "react";
import Cart from "./Cart";
import ListProduct from "./ListProduct";
import Modal from "./Modal";
import ProductDetails from "./ProductDetails";

export default class ShopingCartRedux extends Component {
  render() {
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        {/* Cart component */}
        <Cart />

        {/* Product list component */}
        <ListProduct />

        {/* Cart Modal */}
        <Modal />

        {/* Product details */}
        <ProductDetails />
      </section>
    );
  }
}
