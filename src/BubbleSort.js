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
        this.setState({SortInput: event.target.value.split(",")})
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({definition: "A bubble sort, also called a sinking sort or exchange sort, is a sorting algorithm that compares adjacent pairs and swaps them if necessary, causing the items to 'bubble' up toward their proper position."})
        }, 1000)
      }

    Hover = () => {this.setState({definitionToggle: true})}
    hoverLeave = () => {this.setState({definitionToggle: false})}


    render(){
        let inputArr = this.state.SortInput;
        let len = inputArr.length;
            for (let i = 0; i < len; i++) {
                for (let j = 0; j < len; j++) {
                    if (inputArr[j] > inputArr[j + 1]) {
                        let tmp = inputArr[j];
                        inputArr[j] = inputArr[j + 1];
                        inputArr[j + 1] = tmp;
                    }
                }
            }
            console.log(inputArr);
                
            //Definition
            let Define;
            if(this.state.definitionToggle){
                Define = <div className='definition'>{this.state.definition}</div>
            }

        return(
            <div className='BubbleSort'>
                <h1>Bubble Sort</h1>
                <input type='text' placeholder='Type Text or Number Here..' onChange={this.inputHandler}/>
                <br/><br/><br/><hr/><div className='output'>[{inputArr + ','}]</div><hr/>

                <button className='defineButton' onMouseOver={this.Hover} onMouseLeave={this.hoverLeave}>What is Bubble Sort ?</button>
                {Define}                 
            </div>
        )
    }
}

export default BubbleSort;