import React, { Component } from "react";

export default class LangItems extends Component {
  render() {
    return (
      <>
        <main className="LangItems">{this.props.LangChoice}</main>
      </>
    );
  }
}
