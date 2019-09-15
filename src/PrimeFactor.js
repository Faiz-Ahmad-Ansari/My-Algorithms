import React from 'react';

class PrimeFactor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchFactor : 1
        }
    }

    inputHandler = (event)  => {
        this.setState({searchFactor: event.target.value})
    }

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
        return(
            <div>
                <h1>Find Prime Factors of Number Algoritm</h1>
                <input type='number' placeholder='Type Number Here..' onChange={this.inputHandler}/>
                <div className='output'>{primeFactor}</div>
            </div>
             )
        
    }
}

export default PrimeFactor;