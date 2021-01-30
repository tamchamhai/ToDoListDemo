import React, { Component } from "react";
import BanChoi from "./BanChoi";
import BtnChoi from "./BtnChoi";
import KetQua from "./KetQua";
import "./style.css";

// Tiện ích giúp tạo ra một con só ngẫu nhiên
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default class AppXucXac extends Component {
  // 6 mặt xúc xắc
  xucXacMau = [
    {
      ma: 1,
      hinhAnh: "./img/gameXucXac/1.png",
      soDiem: 1,
    },
    {
      ma: 2,
      hinhAnh: "./img/gameXucXac/2.png",
      soDiem: 2,
    },
    {
      ma: 3,
      hinhAnh: "./img/gameXucXac/3.png",
      soDiem: 3,
    },
    {
      ma: 4,
      hinhAnh: "./img/gameXucXac/4.png",
      soDiem: 4,
    },
    {
      ma: 5,
      hinhAnh: "./img/gameXucXac/5.png",
      soDiem: 5,
    },
    {
      ma: 6,
      hinhAnh: "./img/gameXucXac/6.png",
      soDiem: 6,
    },
  ];
  state = {
    banChon: true, // true = tai, false = xỉu
    tongSoBanChoi: 0,
    soBanThang: 0,
    ketQuaXucXac: [
      {
        ma: 2,
        hinhAnh: "./img/gameXucXac/2.png",
        soDiem: 2,
      },
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
      {
        ma: 1,
        hinhAnh: "./img/gameXucXac/1.png",
        soDiem: 1,
      },
    ],
  };
  // state ở đâu thì setstate phải ở đó
  xuLyBanChon = (banChon) => {
    this.setState({
      banChon,
    });
  };
  xuLyKetQua = () => {
    const ngauNhien = getRandomInt(6); // 0 => 5
    console.log(ngauNhien);
    const newKetQuaXucXac = [
      this.xucXacMau[getRandomInt(6)],
      this.xucXacMau[getRandomInt(6)],
      this.xucXacMau[getRandomInt(6)],
    ];
    // tổng điểm xuc xac dùng reduce
    const tongDiem = newKetQuaXucXac.reduce((tong, xucXac) => {
      return (tong += xucXac.soDiem);
    }, 0);
    // xét kết quả là tài hay xỉu
    let taiOrXiu;
    if (tongDiem >= 3 && tongDiem <= 10) {
      taiOrXiu = false;
    } else {
      taiOrXiu = true;
    }
    // xét có đúng với cái banChon hay ko
    let { tongSoBanChoi, soBanThang } = this.state;
    if (taiOrXiu === this.state.banChon) {
      soBanThang += 1;
    }
    tongSoBanChoi += 1;
    this.setState({
      ketQuaXucXac: newKetQuaXucXac,
      soBanThang,
      tongSoBanChoi,
    });
  };

  // choiGame
  choiGame = () => {
    let i = 0;
    // sau khoảng thời gian cho trước thì chạy lại hàm
    const couter = setInterval(() => {
      // Animate scroll cube
      const newKetQuaXucXac = [
        this.xucXacMau[getRandomInt(6)],
        this.xucXacMau[getRandomInt(6)],
        this.xucXacMau[getRandomInt(6)],
      ];
      this.setState({
        ketQuaXucXac: newKetQuaXucXac,
      });
      // Điều kiện dừng cube
      i += 1;
      if (i == 10) {
        clearInterval(couter);
        // tính kết quả
        this.xuLyKetQua();
      }
    }, 100);
  };

  render() {
    return (
      <div
        className="gameXucXac"
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
          <BanChoi
            xuLyBanChon={this.xuLyBanChon}
            ketQuaXucXac={this.state.ketQuaXucXac}
          />
        </div>
        <div className="container text-center display-4">
          <KetQua
            banChon={this.state.banChon}
            tongSoBanChoi={this.state.tongSoBanChoi}
            soBanThang={this.state.soBanThang}
          />
          <BtnChoi xuLyKetQua={this.xuLyKetQua} choiGame={this.choiGame} />
        </div>
      </div>
    );
  }
}
