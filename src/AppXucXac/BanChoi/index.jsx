import React, { Component } from "react";

export default class BanChoi extends Component {
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
    return ketQuaXucXac.map((xucXac, index) => {
      return (
        <img
          src={xucXac.hinhAnh}
          key={index}
          width={50}
          height={50}
          alt="hinh"
        />
      );
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
