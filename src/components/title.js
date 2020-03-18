import React from 'react';
import '../style/title.css'

function Title(props) {
        return(
            <div>
                <h1 className="display-4 title">{props.text}</h1>
                <hr className="break"/>
            </div>
        )
}

export default Title;