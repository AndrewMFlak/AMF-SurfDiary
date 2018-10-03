import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Footer from './components/footer/footer';
//routes.js used for userAuth
// import * as routes from '../src/constants/routes';
import './App.css';
import { RefCountDisposable } from 'rx';

class App extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   authUser: null,
    // };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact={routes.HOME} component={Home} />
        </Switch>
      </Router>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
