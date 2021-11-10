import React from 'react';
import StepIndicator from './StepIndicator';



const Payment = () => {

    
    const submitOrder = (e: any) => {
        e.preventDefault();
        // fetch("http:localhost:4000/order", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify()
        // })
    }

    return (
        <div className="payment">
            <article className="payment-info">
                <h4 className="page-indicator">STEG 4/4</h4>
                <StepIndicator selectedPage="Checka ut"/>
                <h2>Checka ut din beställning</h2>
            </article>
            <form onSubmit={submitOrder} className="payment-form">
                <div className="payment-columns-wrapper">
                    <article className="payment-left payment-column">
                        <h4>Leverans</h4>
                            
                                <div className="payment-details-div">
                                    <label htmlFor="payment-delivery-fName">Förnamn</label>
                                    <input type="text" id="payment-delivery-fName" />
                                    <label htmlFor="payment-delivery-lName">Efternamn</label>
                                    <input type="text" id="payment-delivery-lName" />
                                </div>
                                <div className="payment-details-div">
                                    <label htmlFor="payment-delivery-street">Gatuadress</label>
                                    <input type="text" id="payment-delivery-street"/>
                                    <label htmlFor="payment-delivery-zip">Postnummer</label>
                                    <input type="text" id="payment-delivery-zip"/>
                                    <label htmlFor="payment-delivery-city">Postort</label>
                                    <input type="text" id="payment-delivery-city"/>
                                </div>
                                <div className="payment-details-div">
                                    <label htmlFor="payment-delivery-email">E-postadress</label>
                                    <input type="text" id="payment-delivery-email" />
                                </div>
                            
                        
                    </article>
                    <article className="payment-right payment-column">
                        <h4>Betalning</h4>
                        
                                <div className="payment-details-div payment-choose-payment">
                                    <div className="payment-radio-wrapper">
                                        <input type="radio" name="payment" id="payment-klarna" />
                                        <label htmlFor="payment-klarna">Klarna</label>
                                    </div>
                                    <img src="./img/klarna-logo.png" alt="" className="klarna-logo" />
                                </div>
                                <div className="payment-details-div payment-choose-payment">
                                    <div className="payment-radio-wrapper">
                                        <input type="radio" name="payment" id="payment-card" />
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
        </div>
    );
};

export default Payment;