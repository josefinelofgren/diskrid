import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

function Header() {
  return (
    <div className="header">
      <Container fluid>
        <div className="header-content">
          <h1 className="title">Ett nytt sätt att torka</h1>
          <Link
            activeClass="active"
            to="pickColor"
            spy={true}
            smooth={true}
            offset={70}
            duration={500}
          >
            <Button className="btn-white">Kom igång</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Header;
