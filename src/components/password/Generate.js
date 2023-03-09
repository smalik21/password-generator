export default function Generate(props) {

    function handleClick() {
        props.onClick();
    }

    return (
        <div className="generate" onClick={handleClick}>
            GENERATE PASSWORD
        </div>
    );
}