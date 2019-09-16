import React from 'react';
import './Menu.css';
import DrawerToggleButton from './DrawerToggleButton';
import {Link} from 'react-router-dom';

const Menu = (props)=> {
    return(
        <div>
            <div><h1 className='MenuHead'>My Algorithms</h1></div>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}  />
            </div> 
            <div className='myNav'>
                <ul>
                    <li><Link to ='PrimeNumber'>Prime Number</Link></li>
                    <li><Link to ='PrimeFactors'>Prime Factors</Link></li>
                    <li><Link to ='BubbleSort'>Bubble Sort</Link></li>
                    <li><Link to ='FizzBuzz'>FizzBuzz</Link></li>
                    <li><Link to ='Fibonacci'>Fibonacci</Link></li>
                    <li><Link to ='ReverseString'>Reverse String</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;