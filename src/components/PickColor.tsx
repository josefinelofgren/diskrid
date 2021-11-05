import React, {useState} from 'react';
import StepIndicator from './StepIndicator';
import { Container } from 'react-bootstrap';

interface IColorArray {
    source: string,
    color: string
}

const PickColor = () => {

    
    //This is a placeholder. Picture array will be fetched from db.
    const pictureArray: IColorArray[] = [
        {
            source: "./img/disktrasa_pink.png",
            color: "pink"
        },
        {
            source: "./img/disktrasa_beige.png",
            color: "beige"
        },
        {
            source: "./img/disktrasa_grey.png",
            color: "grey"
        },
        {
            source: "./img/disktrasa_white.png",
            color: "white"
        },
        {
            source: "./img/disktrasa_black.png",
            color: "black"
        }
    ]
    
    const [pickedColor, setPickedColor] = useState<string>("");


    return (
        <Container fluid>
            <div className="pick-color" id='pickColor'>
                <section className="pick-color-content">
                    <article className="pick-color-text">
                        <h2 className="page-indicator">STEG 1/4</h2>
                        <StepIndicator selectedPage="Välj färg"/>
                        <p><strong>Startpaket från 29 SEK/mån</strong></p>
                        <p className="rag-attributes"><span>Miljövänlig</span><span>Tvättbar</span><span>Hållbar</span></p>
                        <p className="text-secondary"><strong>Välj ett färgtema som passar din vardag</strong></p>
                    </article>
                    <div className="color-choice-wrapper">{pictureArray.map((picture, index) => {
                        return(
                            <img className={`border border-dark rounded-circle color-choice ${pickedColor == picture.color ? "selectedColor" : ""}`} key={picture.source} src={picture.source} onClick={() => setPickedColor(picture.color)}></img>
                        )
                    })}</div>
                    <button className="btn-black btn">nästa steg</button>

                </section>
            </div>
        </Container>
    );
};

export default PickColor;