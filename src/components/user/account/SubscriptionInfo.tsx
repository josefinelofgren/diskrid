import React from 'react';
import { Container, Button } from 'react-bootstrap';

// inloggad användare kan se sin prenumeration
interface Props {
  subscriptionStatus: boolean; 
  currentUser: any; 
}


function SubscriptionInfo(props: Props) {

  const { subscriptionStatus, currentUser } = props;

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


  return (
    <div className='subscription-info'>
      <Container fluid>
          {subscriptionStatus && (
            <>
            <div className='subscription-status is-active fw-bold'>
               Aktiv
            </div>
            <h3 className='fw-bold mt-4'>Nästa order skapas den</h3>
            <h1 className='fw-bold'>25 Nov, 2021</h1>
            <p className='mb-4'>Leverans alt: <span className='fw-bold'>Varannan vecka</span></p>
            <Button className='mb-2 btn-transparent'>Ändra prenumeration</Button><br/>
            <Button className='mb-2 btn-transparent'>Hoppa över nästa leverans</Button><br/> 
            <Button onClick={e => pauseSubscription(e)} className='mb-2 btn-transparent'>Pausa prenumeration</Button><br/>
            <Button onClick={e => endSubscription(e)} className='mb-2 btn-transparent'>Avsluta prenumeration</Button>
            </>
          )}
          {!subscriptionStatus && (
            <>
            <div className='subscription-status fw-bold'>
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
