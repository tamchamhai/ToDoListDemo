import React, { Component } from "react";
import BtnPlay from "./BtnPlay";
import PlayArea from "./PlayArea";
import ResultGame from "./ResultGame";
import "./style.css";

export default class AppXucXacPractice extends Component {
  xucXacMau = [
    {
      id: 1,
      img: "./img/gameXucXac/1.png",
      score: 1,
    },
    {
      id: 2,
      img: "./img/gameXucXac/2.png",
      score: 2,
    },
    {
      id: 3,
      img: "./img/gameXucXac/3.png",
      score: 3,
    },
    {
      id: 4,
      img: "./img/gameXucXac/4.png",
      score: 4,
    },
    {
      id: 5,
      img: "./img/gameXucXac/5.png",
      score: 5,
    },
    {
      id: 6,
      img: "./img/gameXucXac/6.png",
      score: 6,
    },
  ];
  state = {
    yourChoice: true, // true: tài, false: xỉu
    numberOfGolds: 10,
    numberOfTurns: 10,
    diceResult: [
      {
        id: 1,
        img: "./img/gameXucXac/1.png",
        score: 1,
      },
      {
        id: 1,
        img: "./img/gameXucXac/1.png",
        score: 1,
      },
      {
        id: 1,
        img: "./img/gameXucXac/1.png",
        score: 1,
      },
    ],
  };
  // Handle your choice
  handleYourChoice = (yourChoice) => {
    this.setState({
      yourChoice,
    });
  };
  render() {
    return (
      <div
        className="gameXucXacPractice"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
          <PlayArea
            handleYourChoice={this.handleYourChoice}
            diceResult={this.state.diceResult}
          />
        </div>
        <div className="container text-center display-4">
          <ResultGame
            yourChoice={this.state.yourChoice}
            numberOfGolds={this.state.numberOfGolds}
            numberOfTurns={this.state.numberOfTurns}
          />
          <BtnPlay />
        </div>
      </div>
    );
  }
}
