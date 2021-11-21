import { Container } from 'react-bootstrap';
import {useState, useEffect} from 'react';

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

function NextDeliveryInfo() {

    const [subscriptionDetails, setSubscriptionDetails] = useState<IUser|undefined>();

    useEffect(() => {
        setSubscriptionDetails(JSON.parse(localStorage.getItem('currentUser') || '{}'));
      }, []);

  return (
    <div className='next-delivery-info'>
        <Container fluid> 
            <h3 className='fw-bold'>Din prenumeration:</h3>
            <section className='order'>
                <figure>
                    <img src={require('../../../images/disktrasa2.jpg').default} alt='Ordered item'/>
                </figure>
                <div className='order-info grid'>
                    <p className='fw-bold'>{subscriptionDetails? subscriptionDetails.subscription.quantity : null}x Disktrasa {subscriptionDetails? subscriptionDetails.subscription.color : null}</p>
                    <h5 className='fw-bold right'>{subscriptionDetails?.subscription.quantity? parseInt(subscriptionDetails?.subscription.quantity) * 29 : null} SEK</h5>
                </div>
            </section>
            <div className='grid'>
                <h5 className='fw-bold'>Leverans</h5>
                <h5 className='fw-bold right'>Gratis</h5>

                <h4 className='fw-bold'>Totalt</h4>
                <h4 className='fw-bold right'>{subscriptionDetails?.subscription.quantity? parseInt(subscriptionDetails?.subscription.quantity) * 29 : null} SEK</h4>

            </div>
        </Container>
    </div>
  );
}

export default NextDeliveryInfo;
