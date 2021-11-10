import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function LogoutDropDown() {

  const currentUser = localStorage.getItem('currentUser');

  // Log out user on button click and clear local storage

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Log out and clear local storage');
    localStorage.removeItem('currentUser');
  }

  return (
    <div className='logout'>
            <h4 className='title'>Mina sidor</h4>
            <form onSubmit={e => handleSubmit(e)}>
              <section className='form-text'>
                <p>
                  <b>Inloggad som: </b> {currentUser}
                </p>
              </section>
                <div className='form-group'>
                  <Button type="submit" className='btn-black mb-2'>Logga ut</Button>
                </div>
            </form >
        </div>
  );
}

export default LogoutDropDown;
