import React, { useState } from "react";
import PropTypes from 'prop-types';

const CounterApp = ({value= 5}) =>{

    const [counter, setCounter] = useState(value); //retorna un arreglo

    //handleAdd
    const handleAdd =()=>{
        setCounter(counter +1)
        //console.log(e)
    }
    const handleRest=()=>{
        setCounter(counter -1)
        //console.log(e)
    }
    const reset =()=>{
        setCounter(value)
    }

return(
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>
    <button onClick={handleAdd } >+1</button>
    <button onClick={reset} >Reset</button>
    <button onClick={handleRest } >-1</button>
    </>
    
)
}

CounterApp.propTypes={
    value: PropTypes.number
}

export default CounterApp;