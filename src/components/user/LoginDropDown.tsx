import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

interface Props {
  toggleSignUpContent: any; 
}


function LoginDropDown(props: Props) {

  const { toggleSignUpContent } = props;

  const handleSubmit = (e:any) => {
    e.preventDefault();
  }

  // state for checkbox
  const[checked, setChecked] = useState(false);

  return (
    <div className='login'>
            <h4 className='title'>Logga in</h4>
            <form onSubmit={e => handleSubmit(e)}>
                  <section className='form-group'>
                    <label
                      className='form-control-label'
                      htmlFor='email'>
                        E-postadress
                    </label>
                    <input
                      required
                      className='form-control mb-2'
                      type='text'
                      id='email'
                      name='email'
                      placeholder='Ange din e-postadress'
                    />
                  </section>
                  <section className='form-group'>
                  <label
                      className='form-control-label'
                      htmlFor='password'>
                        Lösenord
                    </label>
                    <input
                      required
                      className='form-control mb-4'
                      type='text'
                      id='password'
                      name='password'
                      placeholder='Ange ditt lösenord'
                    />
                  </section>
                  <label className='checkbox-container'>
                      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)}/>
                      <span className='checkmark'></span>
                      <span className='text'>Håll mig inloggad</span>
                  </label>
                  <div className='form-group'>
                    <Button className='btn-black mb-2'>Logga in</Button>
                    <section className='form-text'>
                        <p>
                            <Link
                                className='fw-bold'
                                to='/'>
                                Har du glömt ditt lösenord?
                             </Link>
                        </p>
                    </section>
                    <section className='form-text'>
                        <p>
                            Har du inget konto? {' '}
                            <span className='fw-bold form-link'
                                onClick={toggleSignUpContent}>
                                Skapa konto
                            </span>
                        </p>
                    </section>
                </div>
            </form >
        </div>
  );
}

export default LoginDropDown;
