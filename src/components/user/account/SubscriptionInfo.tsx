import React from 'react';
import {useEffect, useState} from 'react';
import { Container, Button } from 'react-bootstrap';

// inloggad användare kan se sin prenumeration
interface Props {
  subscriptionStatus: boolean; 
  currentUser: any; 
}
interface ISubscription {
  creationDate: string,
  color: string,
  quantity: string,
  delivery: string
}
interface IUser {
  emaiL: string,
  subscriptionStatus: boolean,
  subscription: ISubscription
}


function SubscriptionInfo(props: Props) {

  const { subscriptionStatus, currentUser } = props;

  const [subscriptionDetails, setSubscriptionDetails] = useState<IUser|undefined>();

  let month = undefined;
  const deliveryOptions: number[] = [7, 14, 61];

  useEffect(() => {
    setSubscriptionDetails(JSON.parse(localStorage.getItem('currentUser') || '{}'));
  }, [])
  
  useEffect(() => {
    if(subscriptionDetails){
      const date: any = subscriptionDetails?.subscription.creationDate;
      const delivery = subscriptionDetails?.subscription.delivery;
      let nextDelivery = new Date();
      console.log(typeof(delivery))
      // nextDelivery.setDate(nextDelivery.getDate() + delivery);
      console.log(nextDelivery.getDate() + 1);

    }
    
    // month = displayMonth(date);
    // console.log(month)
  }, [subscriptionDetails])

  const displayMonth = (subscriptionDate: any) => {
    const month = new Date(subscriptionDate).toLocaleDateString('default', {month: 'short'});
    return month;
  }
  const endSubscription = (e:any) => {
    e.preventDefault();
    console.log("End subscription")

    let updateSubscription = {
      email: currentUser.email,
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

      })
  }

  const pauseSubscription = (e:any) => {
    e.preventDefault();
    console.log("Pause subscription")
  }
  const testClick = () => {
    console.log(subscriptionDetails?.subscriptionStatus);
    console.log(subscriptionDetails?.subscription.creationDate);
    const subDate: any = subscriptionDetails?.subscription.creationDate;
    const date = new Date(subDate).toLocaleDateString();
    console.log("date: ", date);
    
    
  }

  return (
    <div className='subscription-info'>
      <Container fluid>
          {subscriptionDetails?.subscriptionStatus && (
            <>
            <div className='subscription-status is-active fw-bold' onClick={testClick}>
               Aktiv
            </div>
            <h3 className='fw-bold mt-4'>Nästa order skapas den</h3>
            <h1 className='fw-bold'>25 Nov, 2021</h1>
            <p className='mb-4'>Leverans alt: <span className='fw-bold'>{subscriptionDetails.subscription.delivery}</span></p>
            <Button className='mb-2 btn-transparent'>Ändra prenumeration</Button><br/>
            <Button className='mb-2 btn-transparent'>Hoppa över nästa leverans</Button><br/> 
            <Button onClick={e => pauseSubscription(e)} className='mb-2 btn-transparent'>Pausa prenumeration</Button><br/>
            <Button onClick={e => endSubscription(e)} className='mb-2 btn-transparent'>Avsluta prenumeration</Button>
            </>
          )}
          {!subscriptionDetails?.subscriptionStatus && (
            <>
            <div className='subscription-status fw-bold' onClick={testClick}>
                Ej aktiv
            </div>
            <h1 className='fw-bold mt-4'>Äntligen har du hittat hit, vi har väntat på dig.</h1>
            <p className='mb-4 mt-4'>Du har ingen prenumeration...än. Är du redo för att underlätta din vardag med hjälp av oss?<br/><br/> 
               Med en prenumeration kommer vi att leverera nya, fräscha disktrasor direkt hem till din dörr, så ofta du vill och så många du vill. No strings attached - gör slut eller pausa din leverans när du vill!<br/><br/>
               Kom igång med din prenumeration genom 3 enkla steg, välj färg {'>'} välj antal {'>'} välj hur ofta.</p>
            <Button className='mb-2 btn-transparent'>Kom igång</Button><br/> 
            <Button className='mb-2 btn-transparent'>Våra produkter</Button><br/> 
            <Button className='mb-2 btn-transparent'>Så fungerar det</Button><br/> 
            </>
          )}
      </Container>
    </div>
  );
}

export default SubscriptionInfo;
