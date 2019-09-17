import React from 'react';
import './ReverseString.css';

class ReverseString extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ReverseInput : ''
        }
    }

    inputHandler = (event)  => {
        this.setState({ReverseInput: event.target.value})
    
    }

    render(){
        let reverse = [];
        for(let i = this.state.ReverseInput.length; i >= 0; i--){
            reverse.push(this.state.ReverseInput[i]);
        }
        console.log(this.state.ReverseInput.length);
        console.log(reverse);
        
        return(
            <div className='ReverseString'>
                <h1>This is Reverse String Algorithm</h1>
                <input type='text' placeholder='Type Text or Number Here..' onChange={this.inputHandler}/>
                <div className='output'>{reverse}</div>
            </div>
        )
    }

}

export default ReverseString;