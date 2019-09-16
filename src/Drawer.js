import React from 'react';
import './Drawer.css';
import {Link} from 'react-router-dom';

const Drawer = (props) => {
    return(
        <div>
            <div className='DrawerNav'>
                <ul>
                    <li><Link to ='PrimeNumber' onClick={props.drawerItemClickHandler}>Prime Number</Link></li>
                    <li><Link to ='PrimeFactors'onClick={props.drawerItemClickHandler}>Prime Factors</Link></li>
                    <li><Link to ='BubbleSort' onClick={props.drawerItemClickHandler}>Bubble Sort</Link></li>
                    <li><Link to ='FizzBuzz' onClick={props.drawerItemClickHandler}>FizzBuzz</Link></li>
                    <li><Link to ='Fibonacci' onClick={props.drawerItemClickHandler}>Fibonacci</Link></li>
                    <li><Link to ='ReverseString' onClick={props.drawerItemClickHandler}>Reverse String</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer;