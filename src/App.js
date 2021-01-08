import React from "react";
import './App.css';
import Header from './components/Header';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import Features from './components/Features';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header /> 
            <Homepage/>
            <Footer/>
          </Route>
          <Route path="/login">
            <Header/>
            <Login/>
            <Footer/>
          </Route>
          <Route path="/signup">
            <Header/>
            <Signup/>
            <Footer/>
          </Route>
          <Route path="/forgot-password">
            <Header/>
            <ForgotPassword/>
            <Footer/>
          </Route>
          <Route path="/features">
            <Header/>
            <Features/>
            <Footer/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
