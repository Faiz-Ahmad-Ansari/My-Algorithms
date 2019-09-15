import React from 'react';
import './Common.css';

class PrimeNum extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchNum : ''
        }
    }
    
    inputHandler = (event) => {
        this.setState({searchNum: event.target.value})
    }

    render(){

        let test = ''; 
        let i ;
        
        for (i = 2; i < this.state.searchNum; i++) {
            if (this.state.searchNum % i=== 0) {
                test = "This is not a prime number";
                break;
                }
             else {
                 test ="This is a prime number";
                }    
            }

        return(
            <div>
                <h1>Verify Prime Number Algorithm</h1>
                <input type='number' placeholder='Type Number Here..' onChange={this.inputHandler}/>
                <div className='output'>{test}</div>
            </div>
             )
        }
    }

export default PrimeNum;