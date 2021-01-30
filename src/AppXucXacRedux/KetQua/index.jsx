import React, { Component } from "react";
import { connect } from "react-redux";
class KetQua extends Component {
  render() {
    const { banChon, tongSoBanChoi, soBanThang } = this.props;
    return (
      // React.Fragment coi như div ảo để giữ các ele ngang cấp các ele ở file index sau cut
      // Có thể dùng <>
      <>
        <div>
          bạn chọn :{" "}
          <span className="text-danger">{banChon ? "Tài" : "Xỉu"}</span>
        </div>
        <div>
          số bàn thắng : <span className="text-success">{soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi :{" "}
          <span className="text-warning">{tongSoBanChoi}</span>
        </div>
      </>
    );
  }
}
// lấy state từ store về component
const mapStateToProps = (statee) => {
  //mapStateToProps chuyển đổi statee trên store thành props của component
  return {
    // object có key: value
    // key là props của component: value là statee trên store
    tenDatDai: statee,
    banChon: statee.xucxacReducer.banChon,
    tongSoBanChoi: statee.xucxacReducer.tongSoBanChoi,
    soBanThang: statee.xucxacReducer.soBanThang,
  };
};
export default connect(mapStateToProps)(KetQua);
