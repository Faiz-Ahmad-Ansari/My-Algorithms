import React from 'react';
import './PrimeFactor.css';
import './definition.css';


class PrimeFactor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchFactor : 1,
            definition : '',
            definitionToggle: false
        }
    }

    inputHandler = (event)  => {
        this.setState({searchFactor: event.target.value})
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({definition: "'Prime Factorization' is finding which prime numbers multiply together to make the original number."})
        }, 1000)
      }

    Hover = () => {this.setState({definitionToggle: true})}
    hoverLeave = () => {this.setState({definitionToggle: false})}

    render(){

        let primeFactor = [] ;

        if (this.state.searchFactor >= 1) {

            while (this.state.searchFactor % 2 === 0) {
                primeFactor.push(2 + ',');
                this.state.searchFactor = this.state.searchFactor/2;
            }
            
                const sqrtNum = Math.sqrt(this.state.searchFactor);
                console.log(sqrtNum);
            for (let i = 3; i <= sqrtNum; i++) {
                while (this.state.searchFactor % i === 0) {
                    primeFactor.push(i + ',');
                    this.state.searchFactor = this.state.searchFactor / i;
                }
            }

            if (this.state.searchFactor > 2) {
                primeFactor.push(this.state.searchFactor);
            }
        }    

        //Definition
        let Define;
        if(this.state.definitionToggle){
            Define = <div className='definition'>{this.state.definition}</div>
        }

        return(
            <div className='PrimeFactor'>
                <h1>Find Prime Factors of Number Algoritm</h1>
                <input type='number' placeholder='Type Number Here..' onChange={this.inputHandler}/>
                <hr/><div className='output'>{primeFactor}</div><hr/>

                <button className='defineButton' onMouseOver={this.Hover} onMouseLeave={this.hoverLeave}>What is Prime Factors ?</button>
                {Define}
            </div>
             )
        
    }
}

export default PrimeFactor;