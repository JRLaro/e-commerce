import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./default.scss";
import { auth, handleUser } from "./firebase/utils";

//layouts
import Main from "./layouts/Main";
import Home from "./layouts/Home";

//pages
import Landing from "./pages/Landing";
import Homepage from "./pages/Homepage";
import Register from "./auth/Register/Register";
import Login from "./auth/Login/Login";

const initialState = {
  currentUser: null,
};
// function App() {
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await handleUser(userAuth);
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      this.setState({
        currentUser: userAuth,
      });
    });
  }
  
  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Landing />} />
            <Route
              exact
              path="/home"
              render={() => (
                <Home currentUser={currentUser}>
                  <Homepage />
                </Home>
                /*
          <Main>
          <Homepage /> 
          </Main>
           */
              )}
            />
            <Route
              exact
              path="/register"
              render={() => (
                <Main currentUser={currentUser}>
                  <Register />
                </Main>
              )}
            />
            <Route
              exact
              path="/login"
              render={() =>
                currentUser ? (
                  <Redirect to="/home" />
                ) : (
                  <Main currentUser={currentUser}>
                    <Login />
                  </Main>
                )
              }
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
