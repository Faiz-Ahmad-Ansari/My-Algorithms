import React from 'react';
import './BubbleSort.css';

class BubbleSort extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            SortInput : []
        }
    }

    inputHandler = (event)  => {
        this.setState({SortInput: event.target.value.split("")})
    }


    render(){
            let swapp;
            let Array = this.state.SortInput;
            let n = Array.length-1;
            let x = Array;
        do {
            swapp = false;
            for (let i=0; i < n; i++)
                    {
                    if (x[i] > x[i+1])
                        {
                        var temp = x[i];
                        x[i] = x[i+1];
                        x[i+1] = temp;
                        swapp = true;
                        }
                    }
                // n--;
            } while (swapp);
            console.log(x);
    
        return(
            <div className='BubbleSort'>
                <h1>This is Sort Array Algorithm</h1>
                <input type='text' placeholder='Type Text or Number Here..' onChange={this.inputHandler}/>
                <div className='output'>[{x + ','}]</div>                 
            </div>
        )
    }
}

export default BubbleSort;