import React from 'react';
import '../style/header.css'

function Header(props) {
        return(
            <div>
                <div className="header-container" style={{backgroundImage: `url(${props.backgroundImage})`}}>         
                </div>
                <h1 className="display-4 main-title">{props.text}</h1>
            </div>
        )
}

export default Header;