import React from 'react';
import './DrawerToggleButton.css';

//this menu button
const DrawerToggleButton = (props) => {
    return(
        <div>
            <button className='toggleButton' onClick={props.click}>
                <div>Menu</div>
            </button>
        </div>
    )
}

export default DrawerToggleButton;