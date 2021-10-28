import React from 'react';
import { Button, Container } from 'react-bootstrap';

function HowItWorks() {
  return (
    <div className='how-it-works'>
      <Container fluid>
          <div className='how-it-works-content'>
              <h3>Så funkar det</h3>
            <h2>Hur funkar DISKRID?</h2>

              {/* <h1 className='title'>Här ska det vara en slogan</h1>
              <Button className='btn-white'>Kom igång</Button> */}
          </div>
      </Container>
    </div>
  );
}

export default HowItWorks;
