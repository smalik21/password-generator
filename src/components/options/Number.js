import { useState } from "react";

export default function Number(props) {

    const [number, setNumber] = useState("10");

    function handleChange(event) {
        props.onChange(event);
        setNumber(event.target.value);
    }

    return (
        <div className="number">
            <p>NUMBER OF CHARACTERS</p>
            <input onChange={handleChange} type="range" value={number} min="6" max="100" />
            <p>{number}</p>
        </div>
    );
}