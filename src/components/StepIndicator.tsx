import React from 'react';
import { getTextOfJSDocComment } from 'typescript';

interface IProps {
    selectedPage: string
}

function StepIndicator(props: IProps) {

    const subscriptionPages: string[] = ["Välj färg", "Välj antal", "Välj hur ofta", "Checka ut"]
    return (
        <div className="step-indicator">
            <p>{subscriptionPages.map(item => {
                return(
                    <span className={props.selectedPage === item ? "currentStep" : "non-active-step"}>{item} <span>{item === "Checka ut" ? null : "> "}</span></span>
                )
            })}</p>
        </div>
    );
}

export default StepIndicator;