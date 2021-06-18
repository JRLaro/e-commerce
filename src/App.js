import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./default.scss";

//layouts
import Main from "./layouts/Main";
import Landing from "./layouts/Landing";

//pages
import Homepage from "./pages/Homepage";
import Register from "./auth/Register";

import Header from "./components/Header/Header";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route
    //         exact
    //         path="/"
    //         render={() => (
    //           <Landing/>
    //         )}
    //       />
    //       <Route
    //         exact
    //         path="/home"
    //         render={() => (
    //           <Main>
    //             <Homepage />
    //           </Main>
    //         )}
    //       />
    //       <Route
    //         exact
    //         path="/register"
    //         render={() => (
    //           <Main>
    //             <Register />
    //           </Main>
    //         )}
    //       />
    //     </Switch>
    //   </div>
    // </Router>
    <Router>

    <div className="App">
      <Header />
      <div className="main">
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/register' component={Register}/>
        </Switch>
      </div>
      </div>
    </Router>
      
  );
}

export default App;
