import React, { Component } from "react";

export default class XucXac extends Component {
  render() {
    const { xucXac } = this.props;
    // this.props.xucXac();
    return (
      <>
        <img src={xucXac.hinhAnh} width={50} height={50} alt="hinh" />
      </>
    );
  }
}
