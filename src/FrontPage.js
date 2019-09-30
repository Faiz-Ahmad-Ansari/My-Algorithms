import React from 'react';
import './FrontPage.css';

const FrontPage = ()=> {
    return(
        <div className='FrontPage'>
            <div id='header'>
                <div>This web site is created using <b>create-react-app</b></div>
                <div>A responsive web app specially designed for mobile phones.</div>
                <div>Devices up to <b>max width 600px</b>.</div>
                <div>It includes <b>Six Algorithms</b></div>
            </div>
            <br/><br/>
            <footer id='sign'>
                <div>Developed by <b>Faiz Ahmad Ansari</b></div>
                <div>Contact - 7775995030/7977211076</div>
                <div>Email - ansarifaiz32@gmail.com</div>
            </footer>
                       
        </div>
    )
}

export default FrontPage;