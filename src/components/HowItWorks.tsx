import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

function HowItWorks() {
  return (
    <div className='how-it-works' id='howItWorks'>
      <Container fluid>
          <div className='how-it-works-content'>
              <h3>Så funkar det</h3>
            <h2>Hur funkar DISKRID?</h2>
            <Row className='how-it-works-steps'>
              <Col md='4'>
                <article className="step">
                    <div className="circle">1</div>
                    <p className="steps-title">Välj en färg</p>
                    <p className="steps-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id felis scelerisque, hendrerit ex faucibus, vehicula ipsum.</p>
                </article>
              </Col>
              <Col md='4'>
                <article className="step">
                    <div className="circle">2</div>
                    <p className="steps-title">Så ofta och så många du vill</p>
                    <p className="steps-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id felis scelerisque, hendrerit ex faucibus, vehicula ipsum. Quisque ut dui elementum.</p>
                </article>
              </Col>
              <Col md='4'>
                <article className="step">
                    <div className="circle">3</div>
                    <p className="steps-title">Gör slut när du vill</p>
                    <p className="steps-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id felis scelerisque.</p>
                </article>
              </Col>
            </Row>
            <section>
                <Button className='btn-black steps-btn'>Kom igång</Button>
            </section>
          </div>
      </Container>
    </div>
  );
}

export default HowItWorks;
