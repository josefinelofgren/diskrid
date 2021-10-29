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
import Footer from './components/Footer';
import SubscriptionInfo from './components/user/account/SubscriptionInfo';
import NextDeliveryInfo from './components/user/account/NextDeliveryInfo';
import { FaLaptopHouse } from 'react-icons/fa';

function App() {

  const[user, setUser] = useState(false);
  const[subscriptionStatus, setSubscriptionStatus] = useState(false);

  return (
    <div className='app'>
      <Router>
          <Nav user={user}/> 
          <Switch>
              <Route exact path='/'>
                  <Header /> 
                  <HowItWorks />
                  <Mission />
                  <AboutUs />
              </Route>
              <Route
                  path='/account/subscription'>
                  <div className='subscription'>
                      <SubscriptionInfo subscriptionStatus={subscriptionStatus}/> 
                      <NextDeliveryInfo subscriptionStatus={subscriptionStatus}/> 
                  </div>
              </Route>
          </Switch>
          <Footer /> 
      </Router>
    </div>
  );
}

export default App;
