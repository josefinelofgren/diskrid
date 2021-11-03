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
import PickColor from './components/PickColor';
import SubscriptionInfo from './components/user/account/SubscriptionInfo';
import NextDeliveryInfo from './components/user/account/NextDeliveryInfo';
import Payment from './components/Payment';

function App() {

  const[user, setUser] = useState(false);
  const[subscriptionStatus, setSubscriptionStatus] = useState(true);
  const[quantity, setQuantity] = useState(0);

  return (
    <div className='app'>
      <Router>
          <Nav user={user}/> 
          <Switch>
              <Route exact path='/'>
                  <Header /> 
                  <HowItWorks />
                  <Mission />
                  <PickQuantity quantity={quantity} />
                  <PickColor/>
                  <Payment/>
                  <AboutUs />
              </Route>
              <Route
                  path='/account/subscription'>
                  <div className='subscription'>
                      <SubscriptionInfo subscriptionStatus={subscriptionStatus}/> 
                      {subscriptionStatus && (
                        <NextDeliveryInfo /> 
                      )}
                  </div>
              </Route>
          </Switch>
          <Footer /> 
      </Router>
    </div>
  );
}

export default App;
