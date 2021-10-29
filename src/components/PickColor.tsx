import React from 'react';
import StepIndicator from './StepIndicator';
import { Container } from 'react-bootstrap';
const PickColor = () => {

    //This is a placeholder. Picture array will be fetched from db.
    const pictureArray: string[] = ["./img/disktrasa_pink.png", "./img/disktrasa_beige.png", "./img/disktrasa_grey.png", "./img/disktrasa_white.png", "./img/disktrasa_black.png"]
    
    return (
        <Container fluid>
            <div className="pick-color">
                <section className="pick-color-content">
                    <article className="pick-color-text">
                        <h2 className="page-indicator">STEG 1/4</h2>
                        <StepIndicator selectedPage="Välj färg"/>
                        <p><strong>Startpaket från 29 SEK/mån</strong></p>
                        <p className="rag-attributes"><span>Miljövänlig</span><span>Tvättbar</span><span>Hållbar</span></p>
                        <p className="text-secondary"><strong>Välj ett färgtema som passar din vardag</strong></p>
                    </article>
                    <div className="color-choice-wrapper">{pictureArray.map((color, index) => {
                        return(
                            <img className={"border border-dark rounded-circle color-choice"} key={color} src={color}></img>
                        )
                    })}</div>
                    <button className="btn-black btn">nästa steg</button>

                    {/* <div className="color-choice color-one"></div>
                    <div className="color-choice color-two"></div>
                    <div className="color-choice color-three"></div>
                    <div className="color-choice color-four"></div>
                    <div className="color-choice color-five"></div> */}
                </section>
            </div>
        </Container>
    );
};

export default PickColor;