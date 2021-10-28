import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

interface Props {
  toggleLogInContent: any; 
}

function SignUpDropDown(props: Props) {

  const { toggleLogInContent } = props;

  const handleSubmit = (e:any) => {
    e.preventDefault();
  }

  // state for checkbox
  const[checked, setChecked] = useState(false);

  return (
    <div className='signup'>
            <h4 className='title'>Skapa konto</h4>
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
                      className='form-control mb-2'
                      type='text'
                      id='passwordOne'
                      name='password'
                      placeholder='Ange ditt lösenord'
                    />
                  </section>
                  <section className='form-group'>
                  <label
                      className='form-control-label'
                      htmlFor='password'>
                        Upprepa lösenord
                    </label>
                    <input
                      required
                      className='form-control mb-4'
                      type='text'
                      id='passwordTwo'
                      name='password'
                      placeholder='Upprepa ditt lösenord'
                    />
                  </section>
                  <label className='checkbox-container'>
                      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)}/>
                      <span className='checkmark'></span>
                      <span className='text'>Jag godkänner att...</span>
                  </label>
                  <div className='form-group'>
                    <Button className='btn-black mb-2'>Skapa konto</Button>
                    <section className='form-text'>
                        <p>
                            Har du redan ett konto? {' '}
                            <span className='fw-bold form-link'
                                onClick={toggleLogInContent}>
                                Logga in
                            </span>
                        </p>
                    </section>
                </div>
            </form >
        </div>
  );
}

export default SignUpDropDown;
