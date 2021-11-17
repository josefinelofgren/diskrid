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
  const[subscriptionStatus, setSubscriptionStatus] = useState(false);
  const[quantity, setQuantity] = useState<number>(0);
  const[delivery, setDelivery] = useState("");
  const[colorChoice, setColorChoice] = useState("");
  const[currentSubscription, setCurrentSubscription] = useState({});
  const[newAccount, setNewAccount] = useState<string|undefined>(undefined);

  const handleColorChoice = (colorChoice: string) => {
    setColorChoice(colorChoice);
    history.push('/step-2');
  }
  const handleQuantityChoice = (quantityChoice: number) => {
    setQuantity(quantityChoice);
    history.push('/step-3');
  }
  const handleDeliveryChoice = (deliveryChoice: string) => {
    setDelivery(deliveryChoice);
    history.push('/step-4');
  }
  const handlePurchaseSubmit = (purchase: IPurchase) => {
    setCurrentSubscription(purchase);
  }
  const handleNewAccount = (account: string) => {
    setNewAccount(account);
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
    }
  },[history])
  

  return (
    <div className='app'>
          <Nav 
              user={user}
              setUser={setUser}/> 
          <Switch>
              <Route exact path='/:step?'>
                  <Header /> 
                  <ScrollToTop smooth top={200} component={<ArrowSVG />} />
                      <Switch>
                          <Route exact path='/'>
                            <PickColor colorChoice={handleColorChoice}/>
                          </Route>
                          <Route exact path='/step-1'>
                            <PickColor colorChoice={handleColorChoice}/>
                          </Route>
                          <Route path='/step-2'>
                              <PickQuantity quantity={quantity} handleQuantityChoice={handleQuantityChoice}/>
                          </Route>
                          <Route path='/step-3'>
                              <PickDelivery delivery={delivery} handleDeliveryChoice={handleDeliveryChoice}/>
                          </Route>
                          <Route path='/step-4'>
                              <Payment colorChoice={colorChoice} delivery={delivery} quantity={quantity} user={user} setUser={setUser} handleNewAccount={handleNewAccount}/>
                          </Route>
                      </Switch>
                  <HowItWorks />
                  <Mission />
                  {/* <Reviews /> */}
                  <AboutUs />
              </Route>
              <Route
                  path='/account/subscription'>
                  <div className='subscription'>
                      <SubscriptionInfo subscriptionStatus={subscriptionStatus} currentUser={currentUser} newAccount={newAccount}/> 
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
