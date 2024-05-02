import { useState } from "react";

export default function Counter() {
    const[counter, SetCounter] = useState(0);

    const handelClick = () => {
        SetCounter(counter +1);
    }

    return(
        <>
        <p>Counter: {counter}</p>
        <button onClick={handleClick}>Increment counter </button>
        </>
    );
}