import React from 'react';
import { Button, Container } from 'react-bootstrap';

function Header() {
  return (
    <div className='header'>
      <Container fluid>
          <div className='header-content'>
              <h1 className='title'>Här ska det vara en slogan</h1>
              <Button className='btn-white'>Kom igång</Button>
          </div>
      </Container>
    </div>
  );
}

export default Header;
