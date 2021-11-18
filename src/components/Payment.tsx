import React from 'react';
import {useState} from 'react';
import StepIndicator from './StepIndicator';
import { Link } from 'react-router-dom';

import {useHistory} from 'react-router-dom';
const generator = require('generate-password');



interface Props {
    colorChoice: string,
    quantity: number,
    delivery: string
    user: string|null,
    setUser: any,
    handleNewAccount: (account: string) => void
}

const Payment = (props: Props) => {

    const loggedInUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    
    const history = useHistory();

    const [details, setDetails] = useState({
        fName: "",
        lName: "",
        street: "",
        zip: "",
        city: "",
        email: "",
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name: string = event.target.name;
        const value: string = event.target.value;

        //Changes state dynamically based on name of input
        setDetails(prevState => ({ ...prevState, [name]: value}));
    }
    const submitOrder = (e: any) => {
        e.preventDefault();
        
        const newPassword = generator.generate({
            length: 10,
            numbers: true
          });
        
        props.handleNewAccount(details.email);
        fetch("http://localhost:4000/users/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: details.email,
                password: newPassword,
                color: props.colorChoice,
                quantity: props.quantity,
                delivery: props.delivery
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            fetch("http://localhost:4000/users/log-in", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email: details.email, password: newPassword}),
    })
    .then(res => res.json())
    .then(result => {  
        
        props.setUser(true)
        console.log(result)

        // naviagate to users subscription
        history.push('/account/subscription');

        // current user to localStorage
        localStorage.setItem('currentUser', JSON.stringify(result));
        JSON.parse(localStorage.getItem('currentUser') || '{}');
      
    })
        })
    }

    return (
        <div className="payment">
            <article className="payment-info">
                <h1 className="page-indicator">STEG 4/4</h1>
                <StepIndicator selectedPage="Checka ut"/>
                <h2>Checka ut din beställning</h2>
            </article>
            <form onSubmit={submitOrder} className="payment-form">
                <div className="payment-columns-wrapper">
                    <article className="payment-left payment-column">
                        <h4>Leverans</h4>
                            
                                <div className="payment-details-div">
                                    <label htmlFor="payment-delivery-fName">Förnamn</label>
                                    <input type="text" id="payment-delivery-fName" name="fName" onChange={handleChange} required/>
                                    <label htmlFor="payment-delivery-lName">Efternamn</label>
                                    <input type="text" id="payment-delivery-lName" name="lName" onChange={handleChange} required/>
                                </div>
                                <div className="payment-details-div">
                                    <label htmlFor="payment-delivery-street">Gatuadress</label>
                                    <input type="text" id="payment-delivery-street" name="street" onChange={handleChange} required/>
                                    <label htmlFor="payment-delivery-zip">Postnummer</label>
                                    <input type="text" id="payment-delivery-zip" name="zip" onChange={handleChange} required/>
                                    <label htmlFor="payment-delivery-city">Postort</label>
                                    <input type="text" id="payment-delivery-city" name="city" onChange={handleChange} required/>
                                </div>
                                <div className="payment-details-div">
                                    <label htmlFor="payment-delivery-email">E-postadress</label>
                                    <input type="text" id="payment-delivery-email" name="email" onChange={handleChange} required/>
                                </div>
                            
                        
                    </article>
                    <article className="payment-right payment-column">
                        <h4>Betalning</h4>
                        
                                <div className="payment-details-div payment-choose-payment">
                                    <div className="payment-radio-wrapper">
                                        <input type="radio" name="payment" id="payment-klarna" required/>
                                        <label htmlFor="payment-klarna">Klarna</label>
                                    </div>
                                    <img src="./img/klarna-logo.png" alt="" className="klarna-logo" />
                                </div>
                                <div className="payment-details-div payment-choose-payment">
                                    <div className="payment-radio-wrapper">
                                        <input type="radio" name="payment" id="payment-card" required/>
                                        <label htmlFor="payment-card">Betala med kort</label>
                                    </div>
                                    <img src="./img/card-logos.png" alt="" className="card-logos" />
                                </div>
                            
                            <div className="accept-account-wrapper">
                                <input type="checkbox" id="accept-account"/>
                                <label htmlFor="accept-account">Jag godkänner...</label>
                            </div>
                    </article>
                </div>
                <button className="btn-black btn checkout-button">SLUTFÖR KÖP</button>
            </form>
            <section className='navigate-back'>
              <Link to='step-3' className='navigate-back'>Tillbaka</Link>
          </section>
        </div>
    );
};

export default Payment;