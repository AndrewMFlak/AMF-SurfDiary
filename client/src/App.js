import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import home from "./pages/home";
import content from "./pages/content";
import something from "./pages/something";
import contentDetail from "./pages/contentDetail";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import Footer from './components/Footer/Footer';
//routes.js used for userAuth
// import * as routes from '../src/constants/routes';
import './App.css';
// import { RefCountDisposable } from 'rx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {

  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/content" component={content} />
            <Route exact path="/content/:id" component={contentDetail} />
            <Route exact path="/something" component={something} />
            {/* <Route component={NoMatch} /> */}
            {/* <Route exact path="/aboutUs" components={about} />
            <Route exact path="/surfSpot" components={form} /> */}
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
