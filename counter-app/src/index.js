import React from 'react'; // rafcp crear un functional component con el mismo nombre del archivo
import ReactDOM from 'react-dom';
import CounterApp from './CounterApp';
//import PrimeraApp from './PrimeraApp';


import './index.css'

const divRoot = document.querySelector('#root');


ReactDOM.render( <CounterApp value={ 5} />,  divRoot)



