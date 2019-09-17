import React from 'react';
import './DrawerToggleButton.css';

//this menu button
const DrawerToggleButton = (props) => {
    return(
        <div>
            <button className='toggleButton' onClick={props.click}>
                <div>Click to here get the Algorithm List</div>
            </button>
        </div>
    )
}

export default DrawerToggleButton;