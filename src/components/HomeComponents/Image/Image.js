import React from 'react';


export default function Image(props) {
    const {header ="", subhead="", button="" }  = props;
    return (
        <div className="main-section">
            <div className="overlayContent">
                <h2>{header}</h2>
                <div>{subhead} </div>
                <button>{button}</button>
            </div>
        </div>
    )
}
