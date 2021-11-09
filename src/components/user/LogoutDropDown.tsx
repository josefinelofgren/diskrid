import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function LogoutDropDown() {

  const handleSubmit = (e:any) => {
    e.preventDefault();

    // Logga ut användaren (skicka info till db) vid klick på "logga ut"-knapp
  }

  return (
    <div className='logout'>
            <h4 className='title'>Mina sidor</h4>
            <form onSubmit={e => handleSubmit(e)}>
            <section className='form-text'>
                        <p>
                            <b>Inloggad som: </b> /namn från databas/ 
                        </p>
                    </section>
                <div className='form-group'>
                    <Button className='btn-black mb-2'>Logga ut</Button>
                </div>
            </form >
        </div>
  );
}

export default LogoutDropDown;
