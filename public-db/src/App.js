import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import FormContainer from './components/container'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <FormContainer />
    </div>
  </Router>
  );
}

export default App;
