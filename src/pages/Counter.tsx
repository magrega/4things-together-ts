import { useEffect, useState } from 'react';

const Counter = ({ counter = 0 }) => {

    const [count, setCount] = useState(counter);
    const [text, setText] = useState("");

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    useEffect(() => count % 10 === 0 && count > 0 ? setText("You've reached ") : setText(""), [count])

    return (
        <div className="counter-container">
            <div className="counter">{`${text} ${count}`}</div>
            <div className="controls">
                <button onClick={increment}>INC</button>
                <button onClick={decrement}>DEC</button>
                <button onClick={reset}>RESET</button>
            </div>
        </div>
    )

}
export default Counter;

