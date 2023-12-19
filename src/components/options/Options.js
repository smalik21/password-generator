import Number from './Number';
import Button from './Button';

export default function Options({ onChange, onClick }) {

    function handleChange(event) {
        onChange(event);
    }

    function handleClick(event) {
        onClick(event);
    }

    return (
        <div className="options">
            <Number
                onChange={handleChange}
            />
            <Button
                name="SmallLetters"
                value="Small Letters ( a, b, c, ... )"
                onClick={handleClick}
            />
            <Button
                name="CapitalLetters"
                value="Capital Letters ( A, B, C, ... )"
                onClick={handleClick}
            />
            <Button
                name="Numbers"
                value="Numbers ( 1, 2, 3, ... )"
                onClick={handleClick}
            />
            <Button
                name="SpecialChars"
                value="Special Characters ( %, @, #, ... )"
                onClick={handleClick}
            />
        </div>
    );
}