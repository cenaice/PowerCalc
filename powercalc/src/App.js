import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar/navbar.js'
import Welcome  from './components/welcome.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <div className='navbar'>
      <Navbar/>
    </div>
    <div className="landing-page">
      <Welcome/>
    </div>
    </>
  );
}

export default App;