// import libaries
import React, { useState } from 'react';
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
import AboutUs from './components/AboutUs';
import PickQuantity from './components/PickQuantity';
import Footer from './components/Footer';

function App() {

  const[user, setUser] = useState(false);
  const[quantity, setQuantity] = useState(0);

  return (
    <div className='app'>
      <Router>
      <Nav user={user}/> 
      <Header /> 
      <HowItWorks />
      <Mission />
      <PickQuantity quantity={quantity} />
      <AboutUs />
      <Footer /> 
      </Router>
    </div>
  );
}

export default App;
