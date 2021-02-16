import React, { Component } from "react";
import { connect } from "react-redux";

class ProductDetails extends Component {
  render() {
    const { productDetails } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={productDetails.src} alt="" />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{productDetails.screen}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{productDetails.os}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{productDetails.frontCamera}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{productDetails.mainCamera}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{productDetails.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{productDetails.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productDetails: state.shopingCartReducer.productDetails,
  };
};

export default connect(mapStateToProps, null)(ProductDetails);
