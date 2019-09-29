import React from 'react';
import './PrimeNum.css';
import './definition.css';

class PrimeNum extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchNum : '',
            definition : '',
            definitionToggle: false
        }
    }
    
    inputHandler = (event) => {
        this.setState({searchNum: event.target.value})
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({definition: "A number that is divisible only by itself and 1."})
        }, 1000)
      }

    Hover = () => {this.setState({definitionToggle: true})}
    hoverLeave = () => {this.setState({definitionToggle: false})}

    render(){

        let test = ''; 
        let i ;
        
        if(this.state.searchNum > 2){
            for (i = 2; i < this.state.searchNum; i++) {
                if (this.state.searchNum % i=== 0) {
                    test = "This is not a prime number";
                    break;
                    }
                else {
                    test ="This is a prime number";
                    }    
                }
            }   else if (this.state.searchNum === "2") {
                    test = "This is a prime number"
                }else if(this.state.searchNum === "1"){
                    test = "1 is neither a prime nor a composite number as it has only one factor that is itself."
                }else if(this.state.searchNum === "0"){
                    test = "This is not a prime number"
                }
                else{
                (test = "")
                }
        
            //Definition
            let Define;
            if(this.state.definitionToggle){
                Define = <div className='definition'>{this.state.definition}</div>
            }

        return(
            <div className='PrimeNum'>
                <h1>Verify Prime Number</h1>
                <input type='number' placeholder='Type Number Here..' onChange={this.inputHandler}/>
                <hr/><div className='output'>{test}</div><hr/>

                <button className='defineButton' onMouseOver={this.Hover} onMouseLeave={this.hoverLeave}>What is Prime Number ?</button>
                {Define}
            </div>
             )
        }
    }

export default PrimeNum;