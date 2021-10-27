// import libaries
import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
 } from 'react-router-dom';

// import components
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <div className='app'>
      <Nav /> 
      <Header /> 
      <Router>

      </Router>
    </div>
  );
}

export default App;
