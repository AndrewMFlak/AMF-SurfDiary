import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home/home";
// import Footer from './components/Footer/Footer';
//routes.js used for userAuth
// import * as routes from '../src/constants/routes';
import './App.css';
// import { RefCountDisposable } from 'rx';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   authUser: null,
  //   // };
  // }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={home} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
