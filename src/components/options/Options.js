import Number from './Number';
import Button from './Button';

export default function Options(props) {

    function handleChange(event) {
        props.onChange(event);
    }

    function handleClick(event) {
        props.onClick(event);
    }

    return (
        <div className="options">
            <Number 
            onChange={handleChange} 
            />
            <Button 
            name="SmallLetters" 
            value="Small Letters ( a, b, c, ... )" 
            num="0"
            onClick={handleClick}
            />
            <Button 
            name="CapitalLetters" 
            value="Capital Letters ( A, B, C, ... )" 
            num="1"
            onClick={handleClick}
            />
            <Button 
            name="Numbers" 
            value="Numbers ( 1, 2, 3, ... )" 
            num="3"
            onClick={handleClick}
            />
            <Button 
            name="SpecialChars" 
            value="Special Characters ( %, @, #, ... )" 
            num="4"
            onClick={handleClick}
            />
        </div>
    );
}