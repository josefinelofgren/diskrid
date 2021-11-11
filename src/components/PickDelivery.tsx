import React, { useState } from "react";
import { Button, Container, Card } from "react-bootstrap";
import StepIndicator from './StepIndicator';

interface Props {
  delivery: any;
  handleDeliveryChoice: (deliveryChoice: string) => void
}

const PickDelivery = (props: Props) => {
  let [delivery, setDelivery] = useState("");

  const handleClick = (e: any) => {
    let selectedDelivery = ""!;

    if (e.target.id === "01") {
      selectedDelivery = "Varje vecka";
    } else if (e.target.id === "02") {
      selectedDelivery = "Varannan vecka";
    } else if (e.target.id === "03") {
      selectedDelivery = "Varannan månad";
    }

    console.log("Selected delivery: " + selectedDelivery);
    setDelivery(selectedDelivery);
  };

  return (
    <Container fluid>
      <div className="pick-delivery">
        <section className="delivery-content">
        <h2 className="page-indicator">STEG 4/4</h2>
          <StepIndicator selectedPage="Välj hur ofta"/>
          <h2>Hur ofta vill du ha din leverans?</h2>
          <section className="delivery-boxes">

            <Card
              className="delivery-box stretched-link"
              id="01"
              onClick={(e) => handleClick(e)}
            >
              <Card.Body>
                <Card.Title className="card-title">Varje vecka</Card.Title>
                <Card.Text>Jag använder min disktrasa flitigt och torkar mycket mjölkspill.</Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="delivery-box stretched-link"
              id="02"
              onClick={(e) => handleClick(e)}
            >
              <Card.Body>
                <Card.Title className="card-title">Varannan vecka</Card.Title>
                <Card.Text>Jag använder min disktrasa måttligt och behöver en fräsch med jämna mellanrum.</Card.Text>
              </Card.Body>
            </Card>

            <Card
              className="delivery-box stretched-link"
              id="03"
              onClick={(e) => handleClick(e)}
            >
              <Card.Body>
                <Card.Title className="card-title">Varannan månad</Card.Title>
                <Card.Text>Jag använder min disktrasa sällan men behöver bli påmind att byta ut den ibland.</Card.Text>
              </Card.Body>
            </Card>
          </section>

          <Button className="btn-black steps-btn" type="submit" onClick={() => props.handleDeliveryChoice(delivery)}>
            Nästa steg
          </Button>
        </section>
      </div>
    </Container>
  );
};

export default PickDelivery;
