import React from 'react';

import './style.css';

const backdrop = props => {
    console.log('test',props);
    return(
        <div className="backdrop" onClick={props.clicking}/>
    )
}
   
export default backdrop;