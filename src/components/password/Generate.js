export default function Generate({ onClick }) {

    function handleClick() {
        onClick();
    }

    return (
        <div className="generate" onClick={handleClick}>
            GENERATE PASSWORD
        </div>
    );
}