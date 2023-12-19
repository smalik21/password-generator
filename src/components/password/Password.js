import Generate from './Generate';
import Result from './Result';

export default function Password({ onClick, password }) {

    function handleClick(event) {
        onClick();
    }

    return (
        <div className="password">
            <Generate
                onClick={handleClick}
            />
            <Result
                password={password}
            />
        </div>
    );
}