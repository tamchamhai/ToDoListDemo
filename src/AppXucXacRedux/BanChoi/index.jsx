import React, { Component } from "react";
import { connect } from "react-redux";
import XucXac from "../XucXac";
import { xuLyBanChonAction } from "../../redux/action/xucXacAction.js";

class BanChoi extends Component {
  xuLyBanChon = (banChon) => {
    console.log(banChon);
    // Nhận lại props xuLyBanChon
    const { xuLyBanChon } = this.props;
    // Truyền cho AppXucXac giá trị banChon
    xuLyBanChon(banChon);
    // Gộp hai bước nhận và truyền
    // this.props.xuLyBanChon(banChon);
  };
  renderKetQuaXucXac = () => {
    const { ketQuaXucXac } = this.props;
    // render kết quả ra jsx
    return ketQuaXucXac?.map((xucXac, index) => {
      // ? là hỏi ketQuaXucXac có thuộc tính map hay ko, nếu có thì thực thi ko thì thôi
      return <XucXac xucXac={xucXac} key={index} />;
    });
  };
  render() {
    return (
      <div className="row text-center">
        <div className="col-4">
          <button
            className="bg-danger display-4 p-5 text-light"
            onClick={() => this.xuLyBanChon(true)} // Để truyền tham số cho hàm phải bọc trong arrow function thì khi nhấn mới chạy hàm không có hàm bao bên ngoài thì khi render thì hàm se thực thi luôn mà không cần nhấn
          >
            TÀI{" "}
          </button>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {this.renderKetQuaXucXac()}
          </div>
        </div>
        <div className="col-4">
          <button
            onClick={() => this.xuLyBanChon(false)} // Để truyền tham số cho hàm phải bọc trong arrow function
            className="bg-dark display-4 p-5 text-light"
          >
            XỈU{" "}
          </button>
        </div>
      </div>
    );
  }
}
/**
 * mapDispatchToProps
 *  truyền dữ liệu từ component lên store
 */
const mapDispatchToProps = (dispatch) => {
  return {
    // key: value
    // key là props của component: value là phường thức gửi data lên store
    xuLyBanChon: (taiOrXiu) => {
      // truyền action cho dispatch
      dispatch(xuLyBanChonAction(taiOrXiu));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    ketQuaXucXac: state.xucxacReducer.ketQuaXucXac,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BanChoi);
/**
 * Lấy về ketQuaXucXac
 *  b1: import connect
 *  b2: gọi connect
 *  b3: viết phương thức mapStateToProps
 *  b4: cho mapStatoToProps vào làm tham số thú 1 của connect
 */
