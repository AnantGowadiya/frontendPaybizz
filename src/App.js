import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Footer'
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
function App() {
  return (
    <div>
        <Header></Header>
        <LoginForm></LoginForm>
        <Footer></Footer>      
    </div>

  );
}

export default App;
