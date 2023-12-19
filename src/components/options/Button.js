import { useState } from "react";

export default function Button({ name, value, onClick }) {

    const [isOn, setIsOn] = useState(false);

    function handleClick(event) {

        setIsOn(!isOn);
        onClick(event);
    }

    return (
        <div className={`toggle-button ${isOn ? "toggle-button-on" : "toggle-button-off"}`}>
            <p className={name} onClick={handleClick}>
                {value}
            </p>
        </div>
    );
}
