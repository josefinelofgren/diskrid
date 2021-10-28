import React from 'react';
import { Button, Container } from 'react-bootstrap';

function HowItWorks() {
  return (
    <div className='how-it-works'>
      <Container fluid>
          <div className='how-it-works-content'>
              <h3>Så funkar det</h3>
            <h2>Hur funkar DISKRID?</h2>
            <section className="how-it-works-steps">
                <article className="step">
                    <div className="circle">1</div>
                    <p className="steps-title">Välj en färg</p>
                    <p className="steps-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id felis scelerisque, hendrerit ex faucibus, vehicula ipsum.</p>
                </article>
                <article className="step">
                    <div className="circle">2</div>
                    <p className="steps-title">Så ofta och så många du vill</p>
                    <p className="steps-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id felis scelerisque, hendrerit ex faucibus, vehicula ipsum. Quisque ut dui elementum.</p>
                </article>
                <article className="step">
                    <div className="circle">3</div>
                    <p className="steps-title">Gör slut när du vill</p>
                    <p className="steps-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id felis scelerisque.</p>
                </article>
            </section>
            <section>
                <Button className='btn-black steps-btn'>Kom igång</Button>
            </section>
          </div>
      </Container>
    </div>
  );
}

export default HowItWorks;
