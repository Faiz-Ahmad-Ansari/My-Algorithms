import React from 'react';
import './ReverseString.css';
import './definition.css';

class ReverseString extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ReverseInput : '',
            definition : '',
            definitionToggle: false
        }
    }

    inputHandler = (event)  => {
        this.setState({ReverseInput: event.target.value})
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({definition: "Mirror view of the input text or number"})
        }, 1000)
      }

    Hover = () => {this.setState({definitionToggle: true})}
    hoverLeave = () => {this.setState({definitionToggle: false})}

    render(){
        let reverse = [];
        for(let i = this.state.ReverseInput.length; i >= 0; i--){
            reverse.push(this.state.ReverseInput[i]);
        }
        console.log(this.state.ReverseInput.length);
        console.log(reverse);

        //Definition
        let Define;
        if(this.state.definitionToggle){
            Define = <div className='definition'>{this.state.definition}</div>
        }
        
        return(
            <div className='ReverseString'>
                <h1>This is Reverse String Algorithm</h1>
                <input type='text' placeholder='Type Text or Number Here..' onChange={this.inputHandler}/>
                <hr/><div className='output'>{reverse}</div><hr/>

                <button className='defineButton' onMouseOver={this.Hover} onMouseLeave={this.hoverLeave}>What is Reverse String ?</button>
                {Define}
            </div>
        )
    }

}

export default ReverseString;