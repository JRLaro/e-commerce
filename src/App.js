import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./default.scss";

//layouts
import Main from "./layouts/Main";
import Landing from "./layouts/Landing";

//pages
import Homepage from "./pages/Homepage";
import Register from "./auth/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Landing />} />
          <Route
            exact
            path="/home"
            render={() => (
              <Main>
                <Homepage />
              </Main>
            )}
          />
          <Route
            exact
            path="/register"
            render={() => (
              <Main>
                <Register />
              </Main>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
