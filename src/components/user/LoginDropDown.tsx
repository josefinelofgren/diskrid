import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import FormError from '../FormError';
import { useHistory } from 'react-router-dom';

interface Props {
  toggleSignUpContent: any; 
  setUserDropDown: any;
  setUser: any;
}


function LoginDropDown(props: Props) {

  const history = useHistory();

  // state for checkbox
  const[checked, setChecked] = useState(true);
  const { toggleSignUpContent, setUserDropDown, setUser } = props;

  // states for login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage]: any = useState(null);

  

  const handleSubmit = (e:any) => {
    e.preventDefault();

    let userInfo = {
      email: email,
      password: password
    };

    // fetch data from db 
    fetch("https://diskrid-server.herokuapp.com/users/log-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
    })
    .then(res => res.json())
    .then(result => {

      if(result === false){
        setErrorMessage("Fel e-postadress- och/eller lösenord, försök igen.")
      }
      else {
        setUserDropDown(false);
        setUser(true)
        console.log(result)

        // naviagate to users subscription
        history.push('/diskrid/account/subscription');

        // current user to localStorage
        localStorage.setItem('currentUser', JSON.stringify(result));
        JSON.parse(localStorage.getItem('currentUser') || '{}');
      }
    })
  }


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
                      value={email}
                      onChange={e => setEmail(e.target.value)}
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
                      value={password}
                      placeholder='Ange ditt lösenord'
                      onChange={e => setPassword(e.target.value)}
                    />
                  </section>
                  {errorMessage !== null ? (
                                <FormError message={errorMessage}/> 
                            ) : null}
                  <label className='checkbox-container'>
                      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)}/>
                      <span className='checkmark'></span>
                      <span className='text'>Håll mig inloggad</span>
                  </label>
                  <div className='form-group'>
                    <Button type='submit' className='btn-black mb-2'>Logga in</Button>
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
