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
import HowItWorks from './components/HowItWorks';
import Mission from './components/Mission';

function App() {
  return (
    <div className='app'>
      <Nav /> 
      <Header /> 
      <HowItWorks />
      <Mission />
      <Router>

      </Router>
    </div>
  );
}

export default App;
