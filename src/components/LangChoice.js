import React, { Component } from "react";
import {Route} from "react-router-dom";
import Langitems from "./LangItems";

export default class LangChoice extends Component {
  render() {
    return (
      <>
        <h2> Choose your Language </h2>
        <section className="LangChoice">
          {this.props.Langlist.map((LangChoice, index) => {
            return (
              <Route
                key={index}
                render={({ history }) => (
                  // 'notes' prop will be entire notes array from state
                  <Langitems
                    key={index}
                    history={history}
                    LangChoice={LangChoice}
                  />
                )}
              />
            );
          })}
        </section>
      </>
    );
  }
}