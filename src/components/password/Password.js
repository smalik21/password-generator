import Generate from './Generate';
import Result from './Result';

export default function Password(props) {

    function handleClick(event) {
        props.onClick();
    }

    return (
        <div className="password">
            <Generate 
                onClick={handleClick}
            />
            <Result
                pass={props.password}
            />
        </div>
    );
}