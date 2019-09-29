import React from 'react';
import './FizzBuzz.css';
import './definition.css';

class FizzBuzz extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            FizzInput: [],
            definition : '',
            definitionToggle: false
        }
    }

    inputHandler = (event)  => {
        this.setState({FizzInput: event.target.value})
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({definition: "Any number divisible by three is replaced by the word fizz and any divisible by five by the word buzz. Numbers divisible by 15, which is both become fizz buzz."})
        }, 1000)
      }

    Hover = () => {this.setState({definitionToggle: true})}
    hoverLeave = () => {this.setState({definitionToggle: false})}

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

        //Definition
        let Define;
        if(this.state.definitionToggle){
            Define = <div className='definition'>{this.state.definition}</div>
        }

        return(
            <div className='FizzBuzz'>
                <h1>This is FizzBuzz Algorithm</h1>
                <input type='number' placeholder='Type Number Here..' onChange={this.inputHandler}/>
                <div>{this.state.FizzInput}</div>
                <br/><br/><hr/><div className='output'>{text}</div><hr/>

                <button className='defineButton' onMouseOver={this.Hover} onMouseLeave={this.hoverLeave}>What is Fizz Buzz ?</button>
                {Define}                 
            </div>
        )
    }
}

export default FizzBuzz;
