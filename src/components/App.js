import '../App.css';
import Heading from './heading/Heading';
import Options from './options/Options';
import Password from './password/Password';
import { useState } from "react";

function App() {

  let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let small = "abcdefghijklmnopqrstuvwxyz";
  let num = "0123456789";
  let sp = "!@#$%^&*()_+-={}[]|:;'<>,.?/";

  // const [text, setText] = useState("Text: ");

  const [charNums, setCharNums] = useState("10");

  const [SmallLetters, setSmallLetters] = useState(0);
  const [CapitalLetters, setCapitalLetters] = useState(0);
  const [Numbers, setNumbers] = useState(0);
  const [SpecialChars, setSpecialChars] = useState(0);

  const [password, setPassword] = useState("");


  function handleChange(event) {
    setCharNums(event.target.value);
  }

  function handleClick(event) {

    if(event.target.className === "SmallLetters") {
      setSmallLetters(!SmallLetters);
    }
    else if(event.target.className === "CapitalLetters") {
        setCapitalLetters(!CapitalLetters);
    }
    else if(event.target.className === "Numbers") {
        setNumbers(!Numbers);
    }
    else if(event.target.className === "SpecialChars") {
        setSpecialChars(!SpecialChars);
    }
  }

  function generatePassword() {

    let char = "";

    if(SmallLetters == 1) {
      char += small;
    }
    if(CapitalLetters == 1) {
      char += capital;
    }
    if(Numbers == 1) {
      char += num;
    }
    if(SpecialChars == 1) {
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
    // setText(text + result);
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
