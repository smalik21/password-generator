import { useState } from "react";

export default function Button(props) {

    // const [SmallLetters, setSmallLetters] = useState(0);
    // const [CapitalLetters, setCapitalLetters] = useState(0);
    // const [Numbers, setNumbers] = useState(0);
    // const [SpecialChars, setSpecialChars] = useState(0);
    
    // const [optionsList, setOptionsList] = useState([]);

    const [isOn, setIsOn] = useState(false);

    function handleClick(event) {

        // if(event.target.className === "SmallLetters") {
        //     setSmallLetters(!SmallLetters);
        // }
        // else if(event.target.className === "CapitalLetters") {
        //     setCapitalLetters(!CapitalLetters);
        // }
        // else if(event.target.className === "Numbers") {
        //     setNumbers(!Numbers);
        // }
        // else if(event.target.className === "SpecialChars") {
        //     setSpecialChars(!SpecialChars);
        // }

        // setOptionsList([SmallLetters, CapitalLetters, Numbers, SpecialChars]);
        setIsOn(!isOn);
        props.onClick(event);
    }

    return (
        <div className={`toggle-button ${isOn ? "toggle-button-on" : "toggle-button-off"}`}>
            <p className={props.name} onClick={handleClick}>
                {props.value}
            </p>
        </div>
    );
}

// num={parseInt(props.num)} clicked={optionsList[num]
