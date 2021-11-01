import React from 'react';
import { Container } from 'react-bootstrap';
  
function NextDeliveryInfo() {

  return (
    <div className='next-delivery-info'>
        <Container fluid> 
            <h3 className='fw-bold'>Din nästa leverans:</h3>
            <section className='order'>
                <figure>
                    <img src={require('../../../images/disktrasa2.jpg').default} alt='Ordered item'/>
                </figure>
                <div className='order-info grid'>
                    <p className='fw-bold'>4x Disktrasa svart</p>
                    <h5 className='fw-bold right'>119 SEK</h5>
                </div>
            </section>
            <div className='grid'>
                <h5 className='fw-bold'>Leverans</h5>
                <h5 className='fw-bold right'>Gratis</h5>
                <h4 className='fw-bold'>Totalt idag</h4>
                <h4 className='fw-bold right'>119 SEK</h4>
            </div>
        </Container>
    </div>
  );
}

export default NextDeliveryInfo;
