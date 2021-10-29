import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';

// inloggad användare kan se sin prenumeration

interface Props {
  subscriptionStatus: boolean; 
}


function SubscriptionInfo(props: Props) {

  const { subscriptionStatus } = props;

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
            <Button className='mb-2 btn-transparent'>Hoppa över nästa leverans</Button><br/> 
            <Button className='mb-2 btn-transparent'>Ändra prenumeration</Button><br/>
            <Button className='mb-2 btn-transparent'>Avsluta prenumeration</Button>
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
