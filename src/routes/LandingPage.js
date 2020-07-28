import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
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
