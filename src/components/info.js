import React from 'react';
import '../style/info.css'

function Info(props) {
    return (
        <div className="info-container">
            <div className="info-text">
                <h3>Hva?</h3>
                <p className="lead">{props.what}</p>
                <h3>Når?</h3>
                <p className="lead">{props.when}</p>
                <h3>Hvor?</h3>
                <p className="lead">{props.where}</p>
                <h3>Påmelding</h3>
                <p className="lead">Send en melding med "Elevkveld" til 1930.<br /> For avmelding send
                        "Elevkveld stopp" til 1930
                    </p>
                <a href="sms:1930?body=Elevkveld" className="btn btn-primary mobile påmelding-btn">Påmelding</a>
            </div>
            <iframe title="kart" className="mazemap" src={props.map}>
            </iframe>
        </div>
    )
}

export default Info;