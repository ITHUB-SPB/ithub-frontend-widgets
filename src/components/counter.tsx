import { useState } from 'react'

type CounterProps = {
    min: number | null;
    max: number | null;
}

export default function Counter(props: CounterProps) {
    const [count, setCount] = useState(props.min ?? 0)

    function handleClick(action: "plus" | "minus") {
        if (action === "minus" && (props.min === null || count > props.min)) {
            setCount(count => count - 1)
        } else if (action === "plus" && (props.max === null || count < props.max)) {
            setCount(count => count + 1)
        }
    }

    function handleReset() {
        setCount(props.min ?? 0)
    }

    return (
        <section className="counter-wrapper">
            <button
                type="button"
                className="counter"
                onClick={() => handleClick('minus')}
            >-</button>

            <div>
                <span className="result">{count}</span>
                <button type="button" className="reset" onClick={handleReset}>x</button>
            </div>

            <button
                type="button"
                className="counter"
                onClick={() => handleClick('plus')}
            >+</button>
        </section >
    )
}