import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./pages/login/login";
import signup from './pages/signup/signup';
import home from "./pages/home";
import Welcome from "./pages/Welcome";
import content from "./pages/content";
import spots from "./pages/spots";
// import spotDetail from "./pages/spotDetail";
import aboutUs from "./pages/aboutUs";
import contentDetail from "./pages/contentDetail";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import signout from "./pages/signout";
// import Footer from './components/Footer/Footer';
//routes.js used for userAuth
// import * as routes from '../src/constants/routes';
import './App.css';
require('dotenv').config({path:__dirname+'/.env'})

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
            <Route exact path="/" component={Welcome} />
            <Route exact path="/home" component={home}/>
            <Route exact path="/signup" component={signup}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/content" component={content} />
            <Route exact path="/content/:id" component={contentDetail} />
            <Route exact path="/spots" component={spots} />
            {/* <Route exact path="/spots/:id" component={spotDetail} */}
            <Route exact path="/aboutUs" component={aboutUs} />
            <Route exact path="/GoodBye" component={signout}/>
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
