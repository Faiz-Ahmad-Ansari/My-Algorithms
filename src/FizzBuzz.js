import React from 'react';
import './FizzBuzz.css';

class FizzBuzz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            FizzInput: []
        }
    }

    inputHandler = (event)  => {
        this.setState({FizzInput: event.target.value})
    }

    render(){
        let text = "";
        let i ;
        for (i = 1;i <= this.state.FizzInput ; i++){
            if (((i % 3) === 0) && ((i % 5) === 0)){
                text += "fizzbuzz, ";
                }
            else if ((i % 3) === 0){
                text += "fizz, ";
            }else if ((i % 5) === 0){
                text += "buzz, ";
            }else {
                text += i + " " ;
            }
        }
        return(
            <div className='FizzBuzz'>
                <h1>This is FizzBuzz Algorithm</h1>
                <input type='number' placeholder='Type Number Here..' onChange={this.inputHandler}/>
                <div>{this.state.FizzInput}</div>
                <div className='output'>{text}</div>                 
            </div>
        )
    }
}

export default FizzBuzz;
