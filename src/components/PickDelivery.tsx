import React, { useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import StepIndicator from './StepIndicator';
import { Link } from 'react-router-dom';

interface Props {
  delivery: any;
  handleDeliveryChoice: (deliveryChoice: string) => void
}
interface IDelivery {
  id: string
  title: string,
  text: string
}

const PickDelivery = (props: Props) => {
  let [delivery, setDelivery] = useState("");

  const deliveryOptions: IDelivery[] = [
    {id: "1", title: "Varje vecka", text: "Jag använder min disktrasa flitigt och torkar mycket mjölkspill"},
    {id: "2", title: "Varannan vecka", text: "Jag använder min disktrasa måttligt och behöver en fräsch med jämna mellanrum."},
    {id: "3", title: "Varannan månad", text: "Jag använder min disktrasa sällan men behöver bli påmind att byta ut den ibland."}
  ]

  
  return (
    <Container fluid>
      <div className="pick-delivery">
        <section className="delivery-content">
        <h1 className="page-indicator">STEG 3/4</h1>
          <StepIndicator selectedPage="Välj hur ofta"/>
          <h2>Hur ofta vill du ha din leverans?</h2>
          <section className="delivery-boxes">{deliveryOptions.map(option => {
            return(
              <Card
              className={`delivery-box stretched-link ${option.title === delivery ? "selected-delivery" : ""}`}
              id={option.id}
              onClick={() => setDelivery(option.title)}
              key={option.id}
            >
              <Card.Body>
                <Card.Title className="card-title">{option.title}</Card.Title>
                <Card.Text>{option.text}</Card.Text>
              </Card.Body>
            </Card>
            )
          })}
          </section>

          <Button className="btn-black steps-btn" type="submit" onClick={() => props.handleDeliveryChoice(delivery)}>
            Nästa steg
          </Button>
          <section className='navigate-back'>
              <Link to='step-2' className='navigate-back'>Tillbaka</Link>
          </section>
        </section>
      </div>
    </Container>
  );
};

export default PickDelivery;
