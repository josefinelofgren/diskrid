import React from 'react';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <div className='header'>
      <div className='header-content'>
          <h1>Här ska det vara en slogan</h1>
          <Button className='btn-white'>Kom igång</Button>
      </div>
     
    </div>
  );
}

export default Header;
