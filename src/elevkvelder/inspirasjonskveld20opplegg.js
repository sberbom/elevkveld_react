import React from 'react';
import '../style/inspirasjonskveld20.css'
import Header from '../components/header'

function Inspirasjonskveld20(props) {
        return(
            <div>
                <h1 class="cancelled">Inspirasjonskvelden er avlyst på grunn av COVID-19 viruset</h1>
                <Header 
                    backgroundImage={'https://sberbom.s3.eu-north-1.amazonaws.com/Selda_flamme.JPG'}
                    text={"Det er ikke et eget opplegg på inspirasjonskvelden"}
                    />
            </div>
        )
}

export default Inspirasjonskveld20;