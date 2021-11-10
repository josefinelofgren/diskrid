// import libaries
import React, { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  useHistory
 } from 'react-router-dom';

// import components
import Nav from './components/Nav';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Mission from './components/Mission';
import PickColor from './components/PickColor';
import AboutUs from './components/AboutUs';
import PickQuantity from './components/PickQuantity';
import Reviews from './components/Reviews';
import PickDelivery from './components/PickDelivery';
import Footer from './components/Footer';
import SubscriptionInfo from './components/user/account/SubscriptionInfo';
import NextDeliveryInfo from './components/user/account/NextDeliveryInfo';
import Payment from './components/Payment';


function App() {

  const[user, setUser]: any = useState(null);
  const[subscriptionStatus, setSubscriptionStatus] = useState(false);
  const[quantity, setQuantity] = useState(0);
  const[delivery, setDelivery] = useState("");

  
  return (
    <div className='app'>
      <Router>
          <Nav 
              user={user}
              setUser={setUser}/> 
          <Switch>
              <Route exact path='/'>
                  <Header /> 
                  <HowItWorks />
                  <Mission />
                  <PickColor/>
                  <PickQuantity quantity={quantity} />
                  {/* <Reviews /> */}

                  <PickColor/>
                  <Payment/>

                  <PickDelivery delivery={delivery} />

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
