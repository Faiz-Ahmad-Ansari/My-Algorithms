import React from 'react';
import './App.css';
import PrimeNum from './PrimeNum';
import PrimeFactor from './PrimeFactor';
import BubbleSort from './BubbleSort';
import FizzBuzz from './FizzBuzz';
import Fibonacci from './Fibonacci';
import ReverseString from './ReverseString';
import Menu from './Menu';
import Drawer from './Drawer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      DrawerOpen: false
    }
  }

  drawerToggleClickHandler = () =>{
    this.setState((prevState)=>{
      return{DrawerOpen: !prevState.DrawerOpen};
    } )
  }

  render(){
    let Draawer;
    if (this.state.DrawerOpen) {
      Draawer = <Drawer drawerItemClickHandler={this.drawerToggleClickHandler} />
    }

    return (
      <div>
        <BrowserRouter>
            <Menu drawerClickHandler={this.drawerToggleClickHandler} />
            {Draawer}
            
        <Switch>
            <Route path= '/PrimeNumber' component= {PrimeNum} />
            <Route path= '/ReverseString' component= {ReverseString} />
            <Route path= '/BubbleSort' component= {BubbleSort} />
            <Route path= '/FizzBuzz' component= {FizzBuzz} />
            <Route path= '/Fibonacci' component= {Fibonacci} />
            <Route path= '/PrimeFactors' component= {PrimeFactor} />
        </Switch>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
