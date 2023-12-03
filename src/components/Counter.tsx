import React, {useState} from 'react';
import classes from './Counter.module.scss';

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div>{counter}</div>
            <button className={classes.button} onClick={() => setCounter(prev => prev + 1)}>
                Increment
            </button>
            <button onClick={() => setCounter(prev => prev - 1)}>Decrement</button>
        </>
    );
}
