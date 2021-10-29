import React from 'react';
import { Container,Button } from 'react-bootstrap';

interface Props {
    subscriptionStatus: boolean; 
  }
  
  
function NextDeliveryInfo(props: Props) {
  
  const { subscriptionStatus } = props;

  return (
    <div className='next-delivery-info'>
        <Container fluid> 
        {subscriptionStatus && (
            <>
            <section className='order'>
                <p className='empty-bag-text'>Din varukorg är tom</p>
            </section>
            <div className='grid'>
                <h5 className='fw-bold'>Leverans</h5>
                <h5 className='fw-bold right'>Gratis</h5>
                <h4 className='fw-bold'>Totalt idag</h4>
                <h4 className='fw-bold right'>0 SEK</h4>
            </div>
            <Button className='btn-black'>Kom igång</Button>
            </>
        )}
        {!subscriptionStatus && (
            <>
            <section className='order'>
                <p className='empty-bag-text'>Din varukorg är tom</p>
            </section>
            <div className='grid'>
                <h5 className='fw-bold'>Leverans</h5>
                <h5 className='fw-bold right'>Gratis</h5>
                <h4 className='fw-bold'>Totalt idag</h4>
                <h4 className='fw-bold right'>0 SEK</h4>
            </div>
            <Button className='btn-black'>Kom igång</Button>
            </>
        )}
        </Container>
    </div>
  );
}

export default NextDeliveryInfo;
