import React from 'react';
import { Navbar, Row, Col, Container } from 'react-bootstrap';
import { FiShoppingBag, FiUser } from "react-icons/fi";

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
          <span><FiUser></FiUser></span>
          <span><FiShoppingBag></FiShoppingBag></span>
        </div>
      </Container>
    </Navbar>
    <div className='subnav'>
      <Container fluid>
        <div className='subnav-grid'>
            <li><a href="">Kom igång</a></li>
            <li><a href="">Så funkar det</a></li>
            <li><a href="">Produkter</a></li>
            <li><a href="">FAQ & hjälp</a></li>
            <li><a href="">Om oss</a></li>
        </div>
      </Container>
    </div>
    </>
  );
}

export default Nav;
