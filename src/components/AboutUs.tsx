import React from 'react';
import { Container, Button } from 'react-bootstrap';

function AboutUs() {
  return (
    <div className='about-us' id="aboutUs">
      <Container fluid>
      <div className='about-us-content'>
              <h3>Om oss</h3>
            <h2>Det här är Diskrid</h2>
            <section className='about-us-text'>
                <p>Fusce sodales massa non justo scelerisque, sed pellentesque eros vestibulum. Curabitur suscipit commodo nisl ac lacinia. Mauris vestibulum ipsum turpis. Nunc ut varius lectus. Ut a turpis sed sem suscipit blandit eu a ligula. Maecenas erat velit, iaculis vel viverra nec, eleifend sed lorem. Etiam sit amet felis a erat dignissim accumsan. Maecenas finibus luctus tincidunt. Mauris condimentum ligula vel lobortis egestas. Curabitur quis leo ut lorem facilisis molestie.</p>
            </section>
            <Button className='btn-black steps-btn'>Kom igång</Button>
          </div>
      </Container>
    </div>
  );
}

export default AboutUs;
