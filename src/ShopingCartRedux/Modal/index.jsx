import React, { Component } from "react";
import { connect } from "react-redux";
import {
  changeDecreaseProduct,
  changeIncreaseProduct,
  deleteProduct,
} from "../../redux/action/shopingCartAction";

class Modal extends Component {
  handleDecreaseAmount = (item) => {
    const { cartList } = this.props;

    const index = cartList.findIndex((product) => product.id === item.id);
    console.log(index);
    if (cartList[index].productAmount === 1) {
      cartList.splice(index, 1);
    } else {
      cartList[index].productAmount--;
    }
    this.props.handleDecreaseAmount(cartList);
  };
  handleIncreaseAmount = (item) => {
    const { cartList } = this.props;
    const index = cartList.findIndex((product) => product.id === item.id);
    cartList[index].productAmount++;
    this.props.handleDecreaseAmount(cartList);
  };
  handleDeleteProduct = (index) => {
    const { cartList } = this.props;
    cartList.splice(index, 1);
    this.props.handleDeleteProduct(cartList);
  };
  renderCartList = () => {
    const { cartList } = this.props;
    return cartList.map((item, index) => {
      return (
        <tr key={index}>
          <th>{item.id}</th>
          <th>{item.model}</th>
          <th>
            <img src={item.src} alt="img product" width={"50px"} />
          </th>
          <th>
            <button
              onClick={() => {
                this.handleDecreaseAmount(item);
              }}
            >
              -
            </button>
            {item.productAmount}
            <button
              onClick={() => {
                this.handleIncreaseAmount(item);
              }}
            >
              +
            </button>
          </th>
          <th>{item.price} vnd</th>
          <th>{item.productAmount * item.price} vnd</th>
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
  renderTotalCost = () => {
    let totalCost = 0;
    const { cartList } = this.props;
    cartList.map((item, index) => {
      totalCost += item.productAmount * item.price;
    });
    return (
      <tr>
        <th>Total cost: {totalCost} vnd</th>
      </tr>
    );
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: 1000 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
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
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderCartList()}</tbody>
                <tbody>{this.renderTotalCost()}</tbody>
              </table>
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

const mapStateToProps = (state) => {
  return {
    cartList: state.shopingCartReducer.cartList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleDecreaseAmount: (index) => {
      dispatch(changeDecreaseProduct(index));
    },
    handleIncreaseAmount: (index) => {
      dispatch(changeIncreaseProduct(index));
    },
    handleDeleteProduct: (index) => {
      dispatch(deleteProduct(index));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
