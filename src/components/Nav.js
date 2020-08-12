import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-service";
import Context from "../context";

export default class Nav extends Component {
  static contextType = Context;

  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.forceUpdate();
  };
  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <>
        <div className="Header__not-logged-in">
          <Link to="/login">Log in</Link>
        </div>
        <div>
          <Link to="/reg">Register</Link>
        </div>
      </>
    );
  }

  render() {
    return (
      <>
        <nav className="header">
          <h1>
            <Link to="/">Vocabulab</Link>
          </h1>

          <div>
            <Link to="/cards"> Cards </Link>
          </div>
          <div>
            <Link to="/profile"> My Cards </Link>
          </div>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
      </>
    );
  }
}
