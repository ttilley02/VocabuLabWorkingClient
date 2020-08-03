import React, { Component } from "react";
import Main1 from "../components/Main1";
import Main2 from "../components/Main2";
import Features from "../components/Features";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Main1 />
        <Features />
        <Main2 />
      </>
    );
  }
}
