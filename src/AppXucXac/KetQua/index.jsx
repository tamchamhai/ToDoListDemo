import React, { Component } from "react";

export default class KetQua extends Component {
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
