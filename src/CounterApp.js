import React,{useState} from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value=10})=>{
    //handleAdd
    const [counter,setCounter] = useState(value);
    
    const handleAdd = (e)=>{
        //setCounter(counter+1)
        setCounter( (c)=>c+1);

    }

    const handleReset = (e)=>{
        setCounter((e)=>e=value)
    }

    const handleRestar = (e)=>{
        setCounter((c)=>c-1);
    }
    
    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick={ handleAdd}>+1</button>
        <button onClick={ handleReset}>Reset</button>
        <button onClick={ handleRestar}>-1</button>
        </>
    );
}

CounterApp.prototype = {
    value: PropTypes.number
}

export default CounterApp;