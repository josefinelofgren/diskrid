import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

interface Props {
  setUserDropDown: (userDropDown: boolean) => void;
  setUser: any;
}

function LogoutDropDown(props: Props) {

  let history = useHistory();
  let currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  const { setUserDropDown, setUser } = props;

  // Log out user on button click and clear local storage

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Log out and clear local storage');
    localStorage.removeItem('currentUser');
    history.push('/diskrid/');
    setUserDropDown(false);
    setUser(null);
  }

  return (
    <div className='logout'>
            <h4 className='title'>Mina sidor</h4>
            <form onSubmit={e => handleSubmit(e)}>
              <section className='form-text'>
                <p>
                  <b>Inloggad som: </b> {currentUser.email}
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
