import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import StepIndicator from './StepIndicator';

interface Props {
    quantity: any;
    handleQuantityChoice: (quantityChoice: number) => void;
}

const PickQuantity = (props: Props) => {

    let [quantity, setQuantity] = useState(0);

    const handleSubmit = (e:any) => {
      e.preventDefault();
      console.log("Form submitted with quantity: " + quantity)
    }

    const handleChange = (e:any) => {
        const re = /^[0-9\b]+$/;

        // If value input is a number, set value as quantity
        if(e.target.value === '' || re.test(e.target.value)) {
            setQuantity(e.target.value);
        }
    }

    const handleClick = (e:any) => {
        let selectedQuantity = e.target.id;
        console.log("Clicked on circle with quantity: " + selectedQuantity);
        
        setQuantity(selectedQuantity);
    }
  
  return (
    <div className='quantity'>
        <Container fluid>
          <div className='quantity-content'>
          <h2 className="page-indicator">STEG 2/4</h2>
          <StepIndicator selectedPage="Välj antal"/>
            <h2>Hur många disktrasor vill du ha i din leverans?</h2>
            <section className="quantity-circles">
                <div className="quantity-circle" id="1" onClick={e => handleClick(e)}>1</div>
                <div className="quantity-circle" id="5" onClick={e => handleClick(e)}>5</div>
                <div className="quantity-circle" id="10" onClick={e => handleClick(e)}>10</div>
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
            <section>
                {/* TILLBAKA-KNAPP HÄR */}
            </section>
          </div>
        </Container>
    </div>
  );
}

export default PickQuantity;
