import React from 'react';
import { Button, Container } from 'react-bootstrap';

function Mission() {
  return (
    <div className='mission'>
      <Container fluid>
          <div className='mission-content'>
              <section className="mission-left">left</section>
              <section className="mission-right">right</section>
          </div>
      </Container>
    </div>
  );
}

export default Mission;
