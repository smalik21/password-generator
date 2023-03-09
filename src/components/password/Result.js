import { useRef } from "react";

export default function Result(props) {

    const textRef = useRef(null);

  const handleCopyClick = () => {
    if (textRef.current) {
      navigator.clipboard.writeText(textRef.current.innerText);
    }
  };
    return (
        <div className="result">
            <p ref={textRef}>{props.pass}</p>
            <input onClick={handleCopyClick} type="button" value="COPY" />
        </div>
    );
}