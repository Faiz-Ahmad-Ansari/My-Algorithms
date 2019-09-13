import React from 'react';

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
                <h1>This is Prime Number</h1>
                <input type='number' onChange={this.inputHandler}/>
                <div>{test}</div>
                <div>{this.state.searchNum}</div>
            </div>
             )
        }
    }

export default PrimeNum;