import React from 'react';
import './Fibonacci.css';
import './definition.css';

class Fibonacci extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            FibInput : [],
            definition : '',
            definitionToggle: false
        }
    }

    inputHandler = (event)  => {
        this.setState({FibInput: event.target.value})
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({definition: "A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc."})
        }, 1000)
      }

    Hover = () => {this.setState({definitionToggle: true})}
    hoverLeave = () => {this.setState({definitionToggle: false})}

    render(){
        let fibArray = [0,1];
            for(let i=2; i <= this.state.FibInput ;i++){
                fibArray.push(fibArray[i-2]+fibArray[i-1]);
                console.log(fibArray);
                }
        const fibArrayString = fibArray.toString();

        //Definition
        let Define;
        if(this.state.definitionToggle){
            Define = <div className='definition'>{this.state.definition}</div>
        }
        return(
            <div className='Fibonacci'>
                <h1>Fibonacci Series</h1>
                <input type='number' placeholder='Type Number Here..' onChange={this.inputHandler}/>
                <br/><br/><br/><hr/><div className='output'>{fibArrayString}</div><hr/>

                <button className='defineButton' onMouseOver={this.Hover} onMouseLeave={this.hoverLeave}>What is Fibonacci Number Series ?</button>
                {Define}                 
            </div>
        )
    }
}

export default Fibonacci;