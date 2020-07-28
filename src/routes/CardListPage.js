import React, { Component } from "react";
import CardCreate from "../components/CardCreate";

export default class LangChoice extends Component {
  render() {
    return (
      <>
        <ul className="cardsList">
          <CardCreate className="notHidden" testData={this.props.testData} />
          <CardCreate className="notHidden" testData={this.props.testData} />
          <CardCreate className="notHidden" testData={this.props.testData} />
          <CardCreate className="notHidden" testData={this.props.testData} />
          <CardCreate className="notHidden" testData={this.props.testData} />
          <CardCreate className="notHidden" testData={this.props.testData} />
          <CardCreate className="notHidden" testData={this.props.testData} />
          <CardCreate className="notHidden" testData={this.props.testData} />
          <CardCreate className="notHidden" testData={this.props.testData} />
        </ul>
      </>
    );
  }
}
