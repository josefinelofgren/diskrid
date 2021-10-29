import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
    <div className='footer'>
      <Container fluid>
        <Row>
          <Col md='6' className='footer-content'>
            <h1>Diskrid</h1>
            <div className='footer-icons'>
          <span>
            <FaInstagram/>
          </span>          
          <span>
            <FaFacebook /> 
          </span>
        </div>
          </Col>
          <Col md='6' className='footer-content'>
            <ul>
              <li>Kom igång</li>
              <li>Så fungerar det</li>
              <li>Produkter</li>
              <li>Om oss</li>
              <li>Hjälp & FAQ</li>
              <li>Kontakta oss</li>
              <li>Karriär</li>
            </ul>
            <p className='subtext'>Avbryt, hoppa över eller pausa din prenumeration genom <br />  att logga in på <span className='fw-bold'>Min prenumeration.</span></p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className='copyright'>
      <Container fluid>
        <Row>
          <Col md='6'>
              <p>Copyright 2021 ® Diskrid AB - Org. XXXXXX-YYYY - All rights reserved. {' '}</p>
          </Col>
          <Col md='6'>
             <span className='fw-bold copyright-link'>VÅRA ALLMÄNNA VILLKOR</span>{' '}
             <span className='fw-bold copyright-link'>INTEGRITETSPOLICY</span>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
}

export default Footer;
