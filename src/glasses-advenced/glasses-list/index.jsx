import React, { Component } from "react";
import Glass from "../glass/index.jsx";

export default class GlassesList extends Component {
  renderGlassesList = () => {
    const { glassesList, handleGlassSelected } = this.props;
    return glassesList.map((glass, index) => {
      return (
        <div className="col-3" key={index}>
          <Glass handleGlassSelected={handleGlassSelected} glass={glass} />
        </div>
      );
    });
  };
  render() {
    return (
      <section className="glasses__list mt-4 d-flex justify-content-around flex-wrap col-7">
        {this.renderGlassesList()}
      </section>
    );
  }
}
