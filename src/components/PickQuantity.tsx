import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import StepIndicator from './StepIndicator';
import { Link } from 'react-router-dom';

interface Props {
    quantity: any;
    handleQuantityChoice: (quantityChoice: number) => void;
}

const PickQuantity = (props: Props) => {

    let [quantity, setQuantity] = useState(0);

    const quantityValues: number[] = [1, 5, 10];

    const handleSubmit = (e:any) => {
      e.preventDefault();
    }

    const handleChange = (e:any) => {
        const re = /^[0-9\b]+$/;

        // If value input is a number, set value as quantity
        if(e.target.value === '' || re.test(e.target.value)) {
            setQuantity(e.target.value);
        }
    }

  return (
    <div className='quantity'>
        <Container fluid>
          <div className='quantity-content'>
          <h1 className="page-indicator">STEG 2/4</h1>
          <StepIndicator selectedPage="Välj antal"/>
            <h2>Hur många disktrasor vill du ha i din leverans?</h2>
            <section className="quantity-circles">{quantityValues.map(value => {
              return (
                <div className={`quantity-circle ${value === quantity ? "selected-quantity" : ""}`} onClick={e => setQuantity(value)} key={value}>{value}</div>
              )
            })}
            </section>
            <section>
                <p>...eller fyll i valfritt antal:</p>
                <form onSubmit={e => handleSubmit(e)}>
                    <input 
                        name="quantity"
                        type="text" 
                        className='form-control-label quantity-input' 
                        onChange={e => handleChange(e)}
                    /> <br />
                    <Button className='btn-black steps-btn' type="submit" onClick={() => props.handleQuantityChoice(quantity)}>Nästa steg</Button>
                </form>
            </section>
            <section className='navigate-back'>
              <Link to='step-1' className='navigate-back'>Tillbaka</Link>
          </section>
          </div>
        </Container>
    </div>
  );
}

export default PickQuantity;
