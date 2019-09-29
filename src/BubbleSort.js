import React from 'react';
import './BubbleSort.css';
import './definition.css';

class BubbleSort extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            SortInput : [],
            definition: '',
            definitionToggle: false
        }
    }

    inputHandler = (event)  => {
        this.setState({SortInput: event.target.value.split("")})
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({definition: "A bubble sort, also called a sinking sort or exchange sort, is a sorting algorithm that compares adjacent pairs and swaps them if necessary, causing the items to 'bubble' up toward their proper position."})
        }, 1000)
      }

    Hover = () => {this.setState({definitionToggle: true})}
    hoverLeave = () => {this.setState({definitionToggle: false})}


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
    
            //Definition
            let Define;
            if(this.state.definitionToggle){
                Define = <div className='definition'>{this.state.definition}</div>
            }

        return(
            <div className='BubbleSort'>
                <h1>This is Sort Array Algorithm</h1>
                <input type='text' placeholder='Type Text or Number Here..' onChange={this.inputHandler}/>
                <hr/><div className='output'>[{x + ','}]</div><hr/>

                <button className='defineButton' onMouseOver={this.Hover} onMouseLeave={this.hoverLeave}>What is Bubble Sort ?</button>
                {Define}                 
            </div>
        )
    }
}

export default BubbleSort;