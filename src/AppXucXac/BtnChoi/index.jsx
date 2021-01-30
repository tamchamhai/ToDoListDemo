import React, { Component } from "react";

export default class BtnChoi extends Component {
  xuLyChoiGame = () => {
    // Nhận lại prop
    const { xuLyKetQua, choiGame } = this.props;
    // gọi xuLyChoiGame
    // xuLyKetQua();
    choiGame();
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
