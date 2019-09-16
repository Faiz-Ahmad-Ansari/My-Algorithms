import React from 'react';
import './Menu.css';
import {Link} from 'react-router-dom';

const Menu = ()=> {
    return(
        <div>
            <div>
                <h1 className='MenuHead'>My Algorithms</h1>
                <div className='mobileMenu'>Menu</div> 
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