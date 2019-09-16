import React from 'react';
import './DrawerToggleButton.css';

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