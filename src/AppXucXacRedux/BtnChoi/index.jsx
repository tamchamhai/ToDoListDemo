import React, { Component } from "react";
import { connect } from "react-redux";

class BtnChoi extends Component {
  xuLyChoiGame = () => {
    // Nhận lại prop
    // const { xuLyKetQua, choiGame } = this.props;
    // gọi xuLyChoiGame
    // xuLyKetQua();
    // choiGame();
    const { lacXucXac, xuLyKetQua } = this.props;

    // this.props.lacXucXac();

    // Xử lý lắc xúc xắc
    let i = 0;
    // sau khoảng thời gian cho trước thì chạy lại hàm
    const couter = setInterval(() => {
      // Animate scroll cube
      lacXucXac();
      // Điều kiện dừng cube
      i += 1;
      if (i == 100) {
        clearInterval(couter);
        // tính kêt quả
        xuLyKetQua();
      }
    }, 0.1);
  };
  render() {
    return (
      // nếu có nhiều thẻ ngang cấp thì cần 1 thẻ bao bên ngoài
      // nếu chỉ có một thẻ thì ko cần
      <button
        onClick={this.xuLyChoiGame}
        className="btn btn-success"
        style={{ fontSize: 30 }}
      >
        PLAY GAME
      </button>
    );
  }
}

const mapDispatchToProps = (ditpat) => {
  return {
    lacXucXac: () => {
      const action = {
        type: "LAC_XUC_XAC",
        payload: null,
      };
      // gửi action lên
      ditpat(action);
    },
    xuLyKetQua: () => {
      const action = {
        type: "XU_LY_KET_QUA",
        payload: null,
      };
      ditpat(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(BtnChoi);
