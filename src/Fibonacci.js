import React from 'react';
import './Fibonacci.css';

class Fibonacci extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            FibInput : []
        }
    }

    inputHandler = (event)  => {
        this.setState({FibInput: event.target.value})
    }

    render(){
        let fibArray = [0,1];
            for(let i=2; i <= this.state.FibInput ;i++){
                fibArray.push(fibArray[i-2]+fibArray[i-1]);
                console.log(fibArray);
                }
        const fibArrayString = fibArray.toString();
        return(
            <div className='Fibonacci'>
                <h1>This is Fibonacci Algorithm</h1>
                <input type='number' placeholder='Type Number Here..' onChange={this.inputHandler}/>
                <div className='output'>{fibArrayString}</div>                 
            </div>
        )
    }
}

export default Fibonacci;