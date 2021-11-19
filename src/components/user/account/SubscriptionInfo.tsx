
import React from 'react';
import {useEffect, useState} from 'react';
import NextDeliveryInfo from './NextDeliveryInfo';
import { useHistory } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

// inloggad användare kan se sin prenumeration
interface Props {
  subscriptionStatus: boolean,
  newAccount: string|undefined
}

interface ISubscription {
  creationDate: string,
  color: string,
  quantity: string,
  delivery: string
}

interface IUser {
  email: string,
  subscriptionStatus: boolean,
  subscription: ISubscription
}


function SubscriptionInfo(props: Props) {

  const [subscriptionDetails, setSubscriptionDetails] = useState<IUser|undefined>();
  const [nextDelivery, setNextDelivery] = useState<string>("");

  let month = undefined;
  const deliveryOptions: number[] = [7, 14, 61];
  let history = useHistory();

  useEffect(() => {
    setSubscriptionDetails(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  }, [])
  
  useEffect(() => {
    if(subscriptionDetails){
      const date: any = subscriptionDetails?.subscription.creationDate;
      let deliveryInterval:number = 0;

      //Converts delivery choice to number of days. Note that 61 is an approximation and won't always be correct. But works for MVP purposes.
      switch(subscriptionDetails?.subscription.delivery) {
        case("Varje vecka"):
          deliveryInterval = 7;
          break;
        case("Varannan vecka"):
          deliveryInterval = 14;
          break;
        case("Varannan månad"):
          deliveryInterval = 61;
          break;
      }
      let calculatedNextDelivery = new Date();
      calculatedNextDelivery.setDate(calculatedNextDelivery.getDate() + deliveryInterval);
      setNextDelivery(calculatedNextDelivery.toLocaleDateString());
    }
    
    
  }, [subscriptionDetails])

  

  const[subscription, setSubscription] = useState(true);

  // End subscription

  const endSubscription = (e:any) => {
    e.preventDefault();
    console.log("End subscription")

    if(subscriptionDetails){
    let updateSubscription = {
      email: subscriptionDetails.email,
      subscriptionStatus: false,
      subscription: {},

    }

    console.log(updateSubscription);

      // fetch data from db
       fetch("http://localhost:4000/users/update-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateSubscription),
      })

      .then(res => res.json())
      .then(result => {

      // current user to localStorage
      localStorage.setItem('currentUser', JSON.stringify(result));
      JSON.parse(localStorage.getItem('currentUser') || '{}');
      setSubscriptionDetails(JSON.parse(localStorage.getItem('currentUser') || '{}'));
      })
    }
  }

  // Pause subscription
  const pauseSubscription = (e:any) => {
    e.preventDefault();
    console.log("Pause subscription")
    setSubscription(false);
  }

  // Resume subscription
  const resumeSubscription = (e:any) => {
    e.preventDefault();
    console.log("Resume subscription")
    setSubscription(true);

    const date = new Date();

    if(subscriptionDetails){
    let updateSubscription = {
      email: subscriptionDetails.email,
      subscriptionStatus: subscriptionDetails.subscriptionStatus,
      subscription: {
        creationDate: date,
        color: subscriptionDetails.subscription.color,
        quantity: subscriptionDetails.subscription.quantity,
        delivery: subscriptionDetails.subscription.delivery,
      },
    }
    console.log(updateSubscription);

    // fetch data from db
    fetch("http://localhost:4000/users/update-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateSubscription),
    })

    .then(res => res.json())
    .then(result => {

    // current user to localStorage
    localStorage.setItem('currentUser', JSON.stringify(result));
    JSON.parse(localStorage.getItem('currentUser') || '{}');
    setSubscriptionDetails(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    })
  }
  }
  

  return (
    <>
    <div className='subscription-info'>
      <Container fluid>
          {subscriptionDetails?.subscriptionStatus && (
            <>
            {subscription && (
              <div className='subscription-status is-active fw-bold'>
               Aktiv

               </div>
            )}
            {!subscription && (
              <div className='subscription-status paused fw-bold'>
               Pausad
               </div>
            )}
            {subscription && (
            <>
            {props.newAccount ? <div className="alert alert-primary new-account" role="alert">Dina kontouppgifter med ett tillfälligt lösenord har skickats till {props.newAccount}</div>
              : null}
            <h3 className='fw-bold mt-4'>Nästa order skickas</h3>
            <h1 className='fw-bold'>{nextDelivery}</h1>
            <p className='mb-4'>Leverans alt: <span className='fw-bold'>{subscriptionDetails.subscription.delivery}</span></p>
            </>
            )}
            {!subscription && (
            <>
            <h3 className='fw-bold mt-4'>Din prenumeration är tillfälligt pausad</h3>
            <p className='mb-4'>Återuppta din prenumeration för att få dina leveranser igen.</p>
            </>
            )}

            <Button className='mb-2 btn-transparent'>Ändra prenumeration</Button><br/>
            {subscription && (
              <>
                <Button className='mb-2 btn-transparent'>Hoppa över nästa leverans</Button><br/> 
                <Button onClick={e => pauseSubscription(e)} className='mb-2 btn-transparent'>Pausa prenumeration</Button>
              </>
            )}
            {!subscription && (
                <Button onClick={e => resumeSubscription(e)} className='mb-2 btn-transparent'>Återuppta prenumeration</Button>
            )}
            <br/>
            <Button onClick={e => endSubscription(e)} className='mb-2 btn-transparent'>Avsluta prenumeration</Button>
            </>
          )}
          {!subscriptionDetails?.subscriptionStatus && (
            <>
            <div className='subscription-status fw-bold'>
                Ej aktiv
            </div>
            <h1 className='fw-bold mt-4'>Äntligen har du hittat hit, vi har väntat på dig.</h1>
            <p className='mb-4 mt-4'>Du har ingen prenumeration...än. Är du redo för att underlätta din vardag med hjälp av oss?<br/><br/> 
               Med en prenumeration kommer vi att leverera nya, fräscha disktrasor direkt hem till din dörr, så ofta du vill och så många du vill. No strings attached - gör slut eller pausa din leverans när du vill!<br/><br/>
               Kom igång med din prenumeration genom 3 enkla steg, välj färg {'>'} välj antal {'>'} välj hur ofta.</p>
            <Button className='mb-2 btn-transparent' onClick={() => history.push('/diskrid/step-1')}>Kom igång</Button><br/> 
            {/* <Button className='mb-2 btn-transparent'>Våra produkter</Button><br/> 
            <Button className='mb-2 btn-transparent'>Så fungerar det</Button><br/>  */}
            </>
          )}
      </Container>
    </div>
    {subscriptionDetails?.subscriptionStatus && (
    <NextDeliveryInfo /> 
    )}
    </>
  );
}

export default SubscriptionInfo;