import '../App.css';
import Heading from './heading/Heading';
import Options from './options/Options';
import Password from './password/Password';
import { useState } from "react";

const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const sp = "!@#$%^&*()_+-={}[]|:;'<>,.?/";

function App() {

    const [charNums, setCharNums] = useState("10");

    const [SmallLetters, setSmallLetters] = useState(false);
    const [CapitalLetters, setCapitalLetters] = useState(false);
    const [Numbers, setNumbers] = useState(false);
    const [SpecialChars, setSpecialChars] = useState(false);

    const [password, setPassword] = useState("");


    function handleChange(event) {
        setCharNums(event.target.value);
    }

    function handleClick(event) {

        if (event.target.className === "SmallLetters") {
            setSmallLetters(!SmallLetters);
        }
        else if (event.target.className === "CapitalLetters") {
            setCapitalLetters(!CapitalLetters);
        }
        else if (event.target.className === "Numbers") {
            setNumbers(!Numbers);
        }
        else if (event.target.className === "SpecialChars") {
            setSpecialChars(!SpecialChars);
        }
    }

    function generatePassword() {

        let char = "";

        if (SmallLetters === true) {
            char += small;
        }
        if (CapitalLetters === true) {
            char += capital;
        }
        if (Numbers === true) {
            char += num;
        }
        if (SpecialChars === true) {
            char += sp;
        }

        let charLength = char.length;

        let counter = 0;
        let result = "";

        while (counter < parseInt(charNums)) {
            result += char.charAt(Math.floor(Math.random() * charLength));
            counter += 1;
        }

        setPassword(result);
    }

    return (
        <div className="App">
            <Heading />
            <Options
                onChange={handleChange}
                onClick={handleClick}
            />
            <Password
                onClick={generatePassword}
                password={password}
            />

        </div>
    );
}

export default App;
