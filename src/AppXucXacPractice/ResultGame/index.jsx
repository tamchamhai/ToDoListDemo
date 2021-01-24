import React, { Component } from "react";

export default class ResultGame extends Component {
  render() {
    const { yourChoice } = this.props;
    const { numberOfGolds } = this.props;
    const { numberOfTurns } = this.props;
    return (
      <>
        <div>
          bạn chọn :{" "}
          <span className="text-danger">{yourChoice ? "Tài" : "Xỉu"}</span>
        </div>
        <div>
          số bàn thắng : <span className="text-success">{numberOfGolds}</span>
        </div>
        <div>
          tổng số bàn chơi :{" "}
          <span className="text-warning">{numberOfTurns}</span>
        </div>
      </>
    );
  }
}
