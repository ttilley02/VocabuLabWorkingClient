import React, { Component } from "react";
import LoginForm from "../components/LoginForm";
import { Section } from "../components/utils";
import Context from "../context";

export default class LoginPage extends Component {
  static contextType = Context;

  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/cards";
    this.context.updateLogIn("yes");
    history.push(destination);
  };

  render() {
    return (
      <Section className="LoginPage">
        <h2>Login</h2>
        <LoginForm onLoginSuccess={this.handleLoginSuccess} />
      </Section>
    );
  }
}
