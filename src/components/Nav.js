import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from '../services/token-service'

export default class Header extends Component {

  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }
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
        <nav>
          <ul className="header">
            <div>
              <Link to="/"> Home</Link>
            </div>
            <div>
              <Link to="/cards"> Cards </Link>
            </div>
            <div>
              <Link to="/profile"> Profile </Link>
            </div>

            {this.renderLogoutLink()}
            {this.renderLoginLink()}
          </ul>
        </nav>
      </>
    );
  }
}
