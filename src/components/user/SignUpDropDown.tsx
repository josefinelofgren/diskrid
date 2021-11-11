import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import FormError from '../FormError';
import { useHistory } from 'react-router-dom'; 

interface Props {
  toggleLogInContent: any; 
  setUserDropDown: any;
  setUser: any;
}

function SignUpDropDown(props: Props) {

  const history = useHistory();
  const { toggleLogInContent, setUserDropDown, setUser } = props;

  // states for signup
  const [email, setEmail] = useState('');
  const [passOne, setPassOne] = useState('');
  const [passTwo, setPassTwo] = useState('');
  const [errorMessage, setErrorMessage]: any = useState(null);

  useEffect(() => {

    // check password requirements
    if(!passOne){
        setErrorMessage(null);
    } else if (passOne.length < 6){
        setErrorMessage('Lösenordet bör innehålla minst 6 tecken.');
    } else if(!passTwo) {
        setErrorMessage(null);
    } else if(passOne !== passTwo) {
        setErrorMessage('Lösenorden matchar inte.');
    } else {
        setErrorMessage(null);
    }

},[passOne, passTwo])

  const handleSubmit = (e:any) => {
    e.preventDefault();

    let newUser = {
      email: email,
      password: passOne,
      subscriptionStatus: false,
      subscription:{}
    };

    console.log(newUser);

    // fetch data from db
    fetch("http://localhost:4000/users/sign-up", {
        method: "POST",
        headers:{
            "Content-Type": "application/json", 
        },
        body: JSON.stringify(newUser)
    })

    .then(res => res.json())
    .then(result => {
      if(result === false){
        setErrorMessage('E-postadressen är upptagen. Logga in eller ange en ny.')
      } else {
        setUserDropDown(false);
        setUser(true)
        console.log(result)
        localStorage.setItem('currentUser', JSON.stringify(result));
        JSON.parse(localStorage.getItem('currentUser') || '{}');
        history.push('/account/subscription');
      }
    })

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
                      value={email}
                      onChange={e => setEmail(e.target.value)}
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
                      id='passOne'
                      name='password'
                      placeholder='Ange ditt lösenord'
                      value={passOne}
                      onChange={e => setPassOne(e.target.value)}
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
                      id='paddTwo'
                      name='password'
                      placeholder='Upprepa ditt lösenord'
                      value={passTwo}
                      onChange={e => setPassTwo(e.target.value)}
                    />
                  </section>
                  {errorMessage !== null ? (
                                <FormError message={errorMessage}/> 
                            ) : null}
                  <label className='checkbox-container'>
                      <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)}/>
                      <span className='checkmark'></span>
                      <span className='text'>Jag godkänner att...</span>
                  </label>
                  <div className='form-group'>
                    <Button type='submit' className='btn-black mb-2'>Skapa konto</Button>
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
