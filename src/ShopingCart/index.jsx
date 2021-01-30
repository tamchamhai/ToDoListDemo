import React, { Component } from "react";
import Cart from "./Cart";
import ListProduct from "./ListProduct";
import CartModel from "./Model";
import ProductDetails from "./ProductDetails";

export default class ShopingCart extends Component {
  ProductList = [
    {
      id: 1,
      src: "./img/vsphone.jpg",
      model: "VinSmart Live",
      screen: '"AMOLED, 6.2", Full HD+',
      os: "Android 9.0 (Pie)",
      frontCamera: "20 PM",
      mainCamera: "Chính 64 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "256 GB",
      price: 7500000,
    },
    {
      id: 2,
      src: "./img/sp_blackberry.png",
      model: "Blackberry 16Xs",
      screen: "AMOLED, FHD+ 2232 x 1080 pixels",
      os: "Android 9.0 (Pie)",
      frontCamera: "20 PM",
      mainCamera: "Chính 148 MP & Phụ 28 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      price: 11000000,
    },
    {
      id: 3,
      src: "./img/applephone.jpg",
      model: "Iphone XS Max",
      screen: 'OLED, 6.5", 1242 x 2688 Pixels',
      os: "IOS 14",
      frontCamera: "20 PM",
      mainCamera: "Chính 108 MP & Phụ 18 MP, 15 MP",
      ram: "8 GB",
      rom: "256 GB",
      price: 25000000,
    },
  ];
  state = {
    currentProduct: {
      id: 1,
      src: "./img/vsphone.jpg",
      model: "VinSmart Live",
      screen: '"AMOLED, 6.2", Full HD+',
      os: "Android 9.0 (Pie)",
      frontCamera: "20 PM",
      mainCamera: "Chính 64 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "256 GB",
    },
    listProductCart: [],
  };
  handleShowDetails = (currentProduct) => {
    this.setState({
      currentProduct,
    });
  };
  handleAddToCart = (listProductCart) => {
    this.setState({
      listProductCart,
    });
  };
  render() {
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <Cart />
        <ListProduct
          ProductList={this.ProductList}
          handleShowDetails={this.handleShowDetails}
          handleAddToCart={this.handleAddToCart}
        />
        <ProductDetails currentProduct={this.state.currentProduct} />
        <CartModel />
      </section>
    );
  }
}
