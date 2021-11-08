import { Container, Button } from 'react-bootstrap';

interface Props {
  shoppingCart: boolean;
}

function ShoppingCart(props: Props) {

  const { shoppingCart } = props;

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
