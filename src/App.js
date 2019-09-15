import React from 'react';
import './App.css';
import PrimeNum from './PrimeNum';
import PrimeFactor from './PrimeFactor';
import BubbleSort from './BubbleSort';
import FizzBuzz from './FizzBuzz';
import Fibonacci from './Fibonacci';
import ReverseString from './ReverseString';
import Menu from './Menu';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <switch>
        <Menu />
        <Route path= '/PrimeNumber' component= {PrimeNum} />
        <Route path= '/PrimeFactors' component= {PrimeFactor} />
        <Route path= '/BubbleSort' component= {BubbleSort} />
        <Route path= '/FizzBuzz' component= {FizzBuzz} />
        <Route path= '/Fibonacci' component= {Fibonacci} />
        <Route path= '/ReverseString' component= {ReverseString} />
      </switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
