import React from "react";
// import Header from "./components/Header/Header";
import "./default.scss";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./auth/Register";

//layouts
import Main from "./layouts/Main";
import Landing from "./layouts/Landing";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header />
        <div className="main"> */}
        <Switch>
          {/* <Route exact path='*' component={Homepage}/> */}
          <Route
            exact
            path="/"
            render={() => (
              <Landing>
              {/* <Main> */}
                <Homepage />
              {/* </Main> */}
              </Landing>
            )}
          />
          <Route
            exact
            path="/home"
            render={() => (
        
              <Main> 
                <Homepage />
             </Main> 
             
            )}
          />
          {/* <Route exact path="/register" component={Register} /> */}
          <Route
            // exact
            path="/register"
            render={() => (
              <Main>
                <Register />
              </Main>
            )}
          />
        </Switch>
        {/* </div> */}
      </div>
    </Router>
  );
}

export default App;
