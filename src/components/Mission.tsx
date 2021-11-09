import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

function Mission() {
  return (
    <div className='mission'>
        <Row>
          <Col md='6'>
            <Container fluid>
            <div className='mission-content left'>
              <h1 className='fw-bold mb-4'>Håll det rent, med gott samvete</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis suscipit, lectus gravida vulputate eleifend, enim turpis eleifend metus, et pharetra libero orci id odio. Etiam scelerisque lorem sem, vitae finibus urna dictum eget.</p>
            </div>
            </Container>
          </Col>
          <Col md='6'>
              <div className='mission-content right'>
              
              </div>
          </Col>
        </Row>
    </div>
  );
}

export default Mission;
