
import React from 'react';
import {useEffect, useState} from 'react';
import NextDeliveryInfo from './NextDeliveryInfo';
import { useHistory } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

// inloggad användare kan se sin prenumeration
interface Props {
  subscriptionStatus: boolean,
  newAccount: string|undefined,
  currentSubscription: IUser|undefined
  setCurrentSubscription: (subscription: IUser) => void,
  fetchDone: boolean
}

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

function SubscriptionInfo(props: Props) {

  const history = useHistory();
  
  // const [subscriptionDetails, setSubscriptionDetails] = useState<IUser|undefined>();
  const [currentCreationDate, setCurrentCreationDate] = useState<Date|undefined>(undefined);
  const [nextDelivery, setNextDelivery] = useState<string|undefined>("");

  // useEffect(() => {
  //   //This needs to not be taken from localstorage, but from state in app. Works for demo purposes but breaks in production.
  //   setSubscriptionDetails(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  // }, [])
  
  //Converts delivery choice to number of days. Note that 61 is an approximation and won't always be correct. But works for MVP purposes.
  const convertDeliveryToNum = () => {
    switch(props.currentSubscription?.subscription.delivery) {
      case("Varje vecka"):
        return 7;
      case("Varannan vecka"):
        return 14;
      case("Varannan månad"):
        return 61;
      default:
        return 0;
    }
  }

  const calculateDelivery = (deliveryNum:number) => {
    // props.currentSubscription!.subscription.creationDate;
    // const currentDeliveryDate:Date = currentCreationDate;
    let calculatedNextDelivery:Date = new Date();
    if(currentCreationDate){
      calculatedNextDelivery = new Date(currentCreationDate);
      calculatedNextDelivery.setDate(calculatedNextDelivery.getDate() + deliveryNum);
    }
    return calculatedNextDelivery;
    // return;
  }
  useEffect(() => {
    console.log("updated Creation!");
    
    // if(currentCreationDate){
      let deliveryInterval:number = convertDeliveryToNum();
      const deliveryDate: Date = calculateDelivery(deliveryInterval);
      console.log(deliveryDate);
      
      setNextDelivery(deliveryDate.toLocaleDateString());
    // }
    
    
  }, [currentCreationDate])
  
  useEffect(() => {
    setCurrentCreationDate(props.currentSubscription?.subscription.creationDate);
  }, [props.fetchDone])

  

  const[subscription, setSubscription] = useState(true);

  // End subscription

  const endSubscription = (e:any) => {
    e.preventDefault();
    console.log("End subscription")

    if(props.currentSubscription){
    let updateSubscription = {
      email: props.currentSubscription.email,
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
      // localStorage.setItem('currentUser', JSON.stringify(result));
      // JSON.parse(localStorage.getItem('currentUser') || '{}');
      // setSubscriptionDetails(JSON.parse(localStorage.getItem('currentUser') || '{}'));
      props.setCurrentSubscription(result);
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

    if(props.currentSubscription){
    let updateSubscription = {
      email: props.currentSubscription.email,
      subscriptionStatus: props.currentSubscription.subscriptionStatus,
      subscription: {
        creationDate: date,
        color: props.currentSubscription.subscription.color,
        quantity: props.currentSubscription.subscription.quantity,
        delivery: props.currentSubscription.subscription.delivery,
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
    // localStorage.setItem('currentUser', JSON.stringify(result));
    // JSON.parse(localStorage.getItem('currentUser') || '{}');
    // setSubscriptionDetails(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    props.setCurrentSubscription(result);
    })
  }
  }
  
  const skipNextDelivery = () => {
    const nextDelivery:number = convertDeliveryToNum();
    const nextDeliveryDate:Date = calculateDelivery(nextDelivery);
    console.log(nextDeliveryDate);
    
    let updatedSubscription = {
      email: props.currentSubscription!.email,
      subscriptionStatus: props.currentSubscription!.subscriptionStatus,
      subscription: {
        creationDate: nextDeliveryDate,
        color: props.currentSubscription!.subscription.color,
        quantity: props.currentSubscription!.subscription.quantity,
        delivery: props.currentSubscription!.subscription.delivery,
      }
    }
    fetch("http://localhost:4000/users/skip", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedSubscription)
    })
    .then(response => response.json())
    .then(data => {
      //This is a bad way of doing it, since it's not updating the state, but overwriting it. This state structure is quite bad and should be changed: nested objects are to be avoided.
      // updatedSubscription.subscription = data;
      // localStorage.setItem('currentUser', JSON.stringify(props.currentSubscription));
      // setSubscriptionDetails(updateSubscription);
      props.setCurrentSubscription(updatedSubscription);
      const dataCreation = data.subscription.creationDate;
      console.log(dataCreation);
      
      setCurrentCreationDate(dataCreation);
      console.log(data);
      
      // console.log(props.currentSubscription);
      
    })
  }

  return (
    <>
    <div className='subscription-info'>
      <Container fluid>
          {props.currentSubscription?.subscriptionStatus && (
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
            <p className='mb-4'>Leverans alt: <span className='fw-bold'>{props.currentSubscription.subscription.delivery}</span></p>
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
                <Button className='mb-2 btn-transparent' onClick={skipNextDelivery}>Hoppa över nästa leverans</Button><br/> 
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
          {!props.currentSubscription?.subscriptionStatus && (
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
    {props.currentSubscription?.subscriptionStatus && (
    <NextDeliveryInfo /> 
    )}
    </>
  );
}

export default SubscriptionInfo;