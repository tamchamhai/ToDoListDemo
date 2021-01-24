import React, { Component } from "react";

export default class PlayArea extends Component {
  handleYourChoice = (yourChoice) => {
    const { handleYourChoice } = this.props;
    handleYourChoice(yourChoice);
  };
  // Render dice result
  renderDiceResult = () => {
    // receice props
    const { diceResult } = this.props;
    // render
    return diceResult.map((item, index) => {
      return (
        <img src={item.img} key={index} width={50} height={50} alt="hinh" />
      );
    });
  };
  // Main render
  render() {
    return (
      <div className="row text-center">
        <div className="col-4">
          <button
            onClick={() => this.handleYourChoice(true)}
            className="bg-danger display-4 p-5 text-light"
          >
            TÀI{" "}
          </button>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {this.renderDiceResult()}
          </div>
        </div>
        <div className="col-4">
          <button
            onClick={() => this.handleYourChoice(false)}
            className="bg-dark display-4 p-5 text-light"
          >
            XỈU{" "}
          </button>
        </div>
      </div>
    );
  }
}
