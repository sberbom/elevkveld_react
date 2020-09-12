import React from 'react';
import '../style/info.css'
import {Tabs, Tab} from "react-bootstrap"

const Info = (props) => {

    if(props.map2) {
        return (
            <div className="info-container">
            <div className="info-text">
                <h3 style={props.map1Style}>Hva?</h3>
                <p className="lead">{props.what}</p>
                <h3>Når?</h3>
                <p className="lead">{props.when}</p>
                <h3>Hvor?</h3>
                <p className="lead">{props.where} <br /> {props.where2} </p>
                <h3>Påmelding</h3>
                <p className="lead">
                    {props.registration} <br className="desktop"/> 
                    {props.unregister} <br />
                    {props.registration2 && props.registration2} <br className="desktop"/>
                    {props.unregister2 && props.unregister2}
                </p>
                <div className={"registraionContainer"}>
                    <a href="sms:1930?body=Elevkveld" className="btn btn-primary mobile påmelding-btn">Påmelding 17:30</a>
                    <a href="sms:1930?body=ENT3R" className="btn btn-primary mobile påmelding-btn">Påmelding 18:30</a>
                </div>
            </div> 
            <div>
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Auditorium S3">
                        <iframe title="kart" className="mazemap" src={props.map}>
                        </iframe>
                    </Tab>
                    <Tab eventKey="profile" title="Auditorium R1">
                        <iframe title="kart" className="mazemap" src={props.map2}>
                        </iframe>
                    </Tab>
                </Tabs>
            </div>
        </div>
        )
    }

    return (
        <div className="info-container">
            <div className="info-text">
                <h3>Hva?</h3>
                <p className="lead">{props.what}</p>
                <h3>Når?</h3>
                <p className="lead">{props.when}</p>
                <h3>Hvor?</h3>
                <p className="lead">{props.where} <br /> {props.where2} </p>
                <h3>Påmelding</h3>
                <p className="lead">{props.registration} <br /> {props.registration2 && props.registration2}</p>
                <a href="sms:1930?body=Elevkveld" className="btn btn-primary mobile påmelding-btn">Påmelding</a>
            </div>
            <iframe title="kart" className="mazemap" src={props.map}>
            </iframe>
        </div>
    )
}

export default Info;