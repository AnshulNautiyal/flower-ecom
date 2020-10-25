import React from 'react';


const redirectTo = () => window.location.href =  window.location.href + '/c/83';

export default function Image(props) {
    const {header ="", subhead="", button="" }  = props;
    return (
        <div className="main-section">
            <div className="overlayContent">
                <h2>{header}</h2>
                <div>{subhead} </div>
                <button onClick={redirectTo}>{button}</button>
            </div>  
        </div>
    )
}
