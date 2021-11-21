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
import Payment from './components/Payment';

// const page_load_URI = 'http://localhost:4000/users/log-in/pageload';
const page_load_URI = 'https://diskrid-server.herokuapp.com/users/log-in/pageload';
interface ISubscription {
  creationDate: Date,
  color: string,
  quantity: string,
  delivery: string
}
interface IUser {
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
  const[currentSubscription, setCurrentSubscription] = useState<IUser|undefined>(undefined);
  const[newAccount, setNewAccount] = useState<string|undefined>(undefined);
  const[fetchDone, setFetchDone] = useState<boolean>(false);

  const handleColorChoice = (colorChoice: string) => {
    setColorChoice(colorChoice);
    history.push('/diskrid/step-2');
  }
  const handleQuantityChoice = (quantityChoice: number) => {
    setQuantity(quantityChoice);
    history.push('/diskrid/step-3');
  }
  const handleDeliveryChoice = (deliveryChoice: string) => {
    setDelivery(deliveryChoice);
    history.push('/diskrid/step-4');
  }
  
  const handleNewAccount = (account: string) => {
    setNewAccount(account);
  }
  
  useEffect(() => {
    // if current user exist in localStorage, direct to account/subscription
    // if not, direct to startpage
    if (localStorage.getItem('currentUser') !== null) {
      fetch(page_load_URI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: localStorage.getItem('currentUser')
      })
      .then(response => response.json())
      .then(data => {
        JSON.stringify(localStorage.setItem('currentUser', JSON.stringify(data)))
        setCurrentSubscription(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        setFetchDone(true);
        history.push('/diskrid/account/subscription')
        setUser(true);
      })
    }
  },[history])
  

  return (
    <div className='app'>
          <Nav 
              user={user}
              setUser={setUser}/> 
          <Switch>
              <Route exact path='/diskrid/:step?'>
                  <Header /> 
                  <ScrollToTop smooth top={200} component={<ArrowSVG />} />
                      <Switch>
                          <Route exact path='/diskrid/'>
                            <PickColor colorChoice={handleColorChoice}/>
                          </Route>
                          <Route exact path='/diskrid/step-1'>
                            <PickColor colorChoice={handleColorChoice}/>
                          </Route>
                          <Route path='/diskrid/step-2'>
                              <PickQuantity quantity={quantity} handleQuantityChoice={handleQuantityChoice}/>
                          </Route>
                          <Route path='/diskrid/step-3'>
                              <PickDelivery delivery={delivery} handleDeliveryChoice={handleDeliveryChoice}/>
                          </Route>
                          <Route path='/diskrid/step-4'>
                              <Payment colorChoice={colorChoice} delivery={delivery} quantity={quantity} user={user} setUser={setUser} handleNewAccount={handleNewAccount} setCurrentSubscription={setCurrentSubscription}/>
                          </Route>
                      </Switch>
                  <HowItWorks />
                  <Mission />
                  <AboutUs />
                  {/* <Reviews /> */}
              </Route>
              <Route
                  path='/diskrid/account/subscription'>
                  <div className='subscription'>
                      <SubscriptionInfo subscriptionStatus={subscriptionStatus} newAccount={newAccount} currentSubscription={currentSubscription} setCurrentSubscription={setCurrentSubscription} fetchDone={fetchDone}/> 
                  </div>
              </Route>
          </Switch>
          <Footer /> 
    </div>
  );
}

export default App;
