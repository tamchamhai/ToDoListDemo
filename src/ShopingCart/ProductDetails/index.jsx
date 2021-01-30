import React, { Component } from "react";

export default class ProductDetails extends Component {
  render() {
    const { currentProduct } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img
            className="img-fluid"
            src={currentProduct.src}
            alt="product img"
          />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{currentProduct.screen}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{currentProduct.os}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{currentProduct.frontCamera}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{currentProduct.mainCamera}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{currentProduct.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{currentProduct.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
