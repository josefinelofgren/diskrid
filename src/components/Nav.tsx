import React from 'react';
import { Navbar, Row, Col, Container } from 'react-bootstrap';

function Nav() {

  return (
    <>
    <Navbar>
      <Container fluid>
        <div>
          Kom igång
        </div>
        <Navbar.Brand>
          Diskrid
        </Navbar.Brand>
        <div className='navbar-icons'>
          icon icon icon
        </div>
      </Container>
    </Navbar>
    <div className='subnav'>
      <Container fluid>
        <div className='subnav-grid'>
            <li>Kom igång</li>
            <li>Så funkar det</li>
            <li>Produkter</li>
            <li>FAQ & hjälp</li>
            <li>Om oss</li>
        </div>
      </Container>
    </div>
    </>
  );
}

export default Nav;
