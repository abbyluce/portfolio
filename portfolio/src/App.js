import React from "react";
import "./App.css";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <div className="main-text">
                <h1>
                  <span>Hello,</span>
                  <br></br>
                  <span>I'm Abby!</span>
                </h1>
                <div className="line">
                  <span>_____________________</span>
                </div>
                <h2>
                  <span>developer && </span>
                  <br></br>
                  <span>designer</span>
                </h2>
              </div>
            );
          }}
        />
        <Route render={() => <p>Error loading page.</p>} />
      </Switch>
    </div>
  );
};

export default App;
