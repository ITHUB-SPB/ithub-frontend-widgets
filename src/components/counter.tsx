import { useReducer } from 'react'

type CounterProps = {
    min: number | null;
    max: number | null;
    updateClicks: () => void;
}

type CounterState = {
    count: number,
    min: number | null,
    max: number | null
}

type Action = { type: 'plus' } | { type: 'minus' } | { type: 'reset ' }

function counterReducer(state: CounterState, action: Action) {
    switch (action.type) {
        case 'plus':
            return state.max === null || state.count < state.max
                ? { ...state, count: state.count + 1 }
                : state
        case 'minus':
            return state.min === null || state.count > state.min
                ? { ...state, count: state.count - 1 }
                : state
        case 'reset ':
            return { ...state, count: state.min ?? 0 }
    }
}

export default function Counter(props: CounterProps) {
    const [state, dispatch] = useReducer(counterReducer, {
        count: props.min ?? 0,
        min: props.min,
        max: props.max
    })

    function canPlus(): boolean {
        return state.max === null || state.count < state.max
    }

    function canMinus(): boolean {
        return state.min === null || state.count > state.min
    }

    return (
        <section className="counter-wrapper">
            <button
                type="button"
                className="counter"
                disabled={!canMinus()}
                onClick={() => {
                    dispatch({ type: "minus" })
                    props.updateClicks()
                }}
            >-</button>

            <div className="column">
                <span className="result">{state.count}</span>
                <button type="button" className="reset" onClick={() => dispatch({ type: "reset " })}>x</button>
            </div>

            <button
                type="button"
                className="counter"
                disabled={!canPlus()}
                onClick={() => {
                    dispatch({ type: "plus" })
                    props.updateClicks()
                }}
            >+</button>
        </section >
    )
}