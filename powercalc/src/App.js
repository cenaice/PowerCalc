import './App.css';
import React, {useState, useEffect} from 'react';
import Navbar from './components/navbar.js'
import Hero  from './components/hero.js';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <div className='navbar'>
      <Navbar/>
    </div>
    <div className="dark:bg-gray-800 p-6 flex justify-center items-start">
      <Hero/>
      
    </div>
    </>
  );
}

export default App;