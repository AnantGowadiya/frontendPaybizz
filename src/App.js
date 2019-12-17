import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Footer'
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
// import RegistrationPage from './components/RegistrationPage';
import RegistrationEmail from './components/RegistrationEmail';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <Header/>
          <LoginForm /> 
        </Route>
        <Route path="/register">
          <Header/>
          <Registration/>
        </Route>
        <Route path="/registrationEmail">
          <Header/>
          <RegistrationEmail/>
        </Route>
        <Route path="/registrationForm">
          <Header/>
          <Registration/>
        </Route>
        <Route path="/dashboard"><Dashboard/></Route>
        <Footer></Footer>
      </div>
    </Router>
  );
}
export default App;
