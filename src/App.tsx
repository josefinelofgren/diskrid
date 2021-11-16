// import libaries
import React, { useEffect, useState } from 'react';
import { 
  BrowserRouter as Router, 
  Switch,
  Route,
  useHistory
 } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
import {ReactComponent as ArrowSVG} from "./images/arrow.svg";


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

interface ISubscription {
  creationDate: Object,
  color: string,
  quantity: string,
  delivery: string
}
interface IPurchase {
  email: string,
  subscriptionStatus: boolean,
  subscription: ISubscription
}

function App() {

  const history = useHistory();
  const[user, setUser]: any = useState(null);
  const[subscriptionStatus, setSubscriptionStatus] = useState(true);
  const[quantity, setQuantity] = useState<number>(0);
  const[delivery, setDelivery] = useState("");
  const[colorChoice, setColorChoice] = useState("");
  const[currentSubscription, setCurrentSubscription] = useState({});

  const handleColorChoice = (colorChoice: string) => {
    setColorChoice(colorChoice);
  }
  const handleQuantityChoice = (quantityChoice: number) => {
    setQuantity(quantityChoice);
  }
  const handleDeliveryChoice = (deliveryChoice: string) => {
    setDelivery(deliveryChoice);
  }
  const handlePurchaseSubmit = (purchase: IPurchase) => {
    setCurrentSubscription(purchase);
  }

  // LOCAL STORAGE FOR CURRENT USER
  let currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  useEffect(() => {
    console.log(currentUser)
    // if current user exist in localStorage, direct to account/subscription
    // if not, direct to startpage
    if (localStorage.getItem('currentUser') !== null) {
      history.push('/account/subscription')
      setUser(true);
    } else {
      history.push('/')
    }
  },[history])
  

  return (
    <div className='app'>
          <Nav 
              user={user}
              setUser={setUser}/> 
          <Switch>
              <Route exact path='/'>
                  <Header /> 
                  <ScrollToTop smooth top={200} component={<ArrowSVG />} />
                  <HowItWorks />
                  <Mission />
                  <PickColor colorChoice={handleColorChoice}/>
                  <PickQuantity quantity={quantity} handleQuantityChoice={handleQuantityChoice}/>
                  {/* <Reviews /> */}
                  {/* <PickColor/> */}
                  <PickDelivery delivery={delivery} handleDeliveryChoice={handleDeliveryChoice}/>
                  <Payment colorChoice={colorChoice} delivery={delivery} quantity={quantity} user={user} setUser={setUser}/>
                  <AboutUs />
              </Route>
              <Route
                  path='/account/subscription'>
                  <div className='subscription'>
                      <SubscriptionInfo subscriptionStatus={subscriptionStatus} currentUser={currentUser}/> 
                      {subscriptionStatus && (
                        <NextDeliveryInfo /> 
                      )}
                  </div>
              </Route>
          </Switch>
          <Footer /> 
    </div>
  );
}

export default App;
