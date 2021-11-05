import { Container, Button } from 'react-bootstrap';

interface Props {
  shoppingCart: boolean;
}

function ShoppingCart(props: Props) {
  
  

  const { shoppingCart } = props;

  console.log(shoppingCart);

  switch(shoppingCart){
    case false:
      document.body.style.overflow = 'scroll'
      console.log('du ska  kunna scrolla');
      break
    case true: 
      document.body.style.overflow = 'hidden'
      console.log('du ska inte kunna scrolla');
  }
  return (
    <div className={shoppingCart ? 'shopping-cart-content is-active' : 'shopping-cart-content'}>
      <Container fluid>
          <h2 className='title'>Din varukorg</h2>
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
      </Container>
    </div>
  );
}

export default ShoppingCart;
