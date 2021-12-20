import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp= ({saludo, subtitulo})=>{

//const saludo = 'Hola, soy un saludo'


return (
    <>
    <h1> {saludo}</h1>
<p> {subtitulo} Mi primera página web</p>
    </>

)
}

PrimeraApp.propTypes={
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps ={
    subtitulo: 'Soy un subtitulo'
}
export default PrimeraApp;



