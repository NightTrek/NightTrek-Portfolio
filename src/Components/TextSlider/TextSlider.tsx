import React, {Component} from 'react';
import "./style.css";

const textArray = [
    "Helping teams innovate",
    "Save money with automation",
    "Fast technology solutions for business",
    "Bringing seamless web technology to everyone",
    "Full stack web development"
];

const TextSlider = () => {
    const [textNumber, setTextNumber] = React.useState(textArray.length-1)
    
    React.useEffect(() => {
        const timeout = setInterval(() => {
            let currentIdx = textNumber;
            if(currentIdx === textArray.length-1){
                currentIdx =0;
            }
            setTextNumber(currentIdx + 1 );
        }, 3000);

        return () => clearInterval(timeout);
        });
        
    return (
        <div>
            <h1 className={"sliderText"}>{textArray[textNumber]}</h1>
        </div>
         );
}

//

export default TextSlider;