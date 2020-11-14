import React from 'react';
import Header from '../components/header'
import elevkveldforside from '../files/elevkveldforside.jpg'
import noiceCancelling from '../files/bose.webp'
import "../style/elevkveld251120.css"

const Elevkveld191120 = () => {

    return (
        <div className="elevkveld251120">
            <img className={"img-header mobile"} src={elevkveldforside} alt="header"/>
            <div className={"desktop"}>
                <Header 
                backgroundImage={elevkveldforside}
                />
            </div>
            <div className="info-container info-container-olav">
                <div className="info-text">
                    <h3>Hva?</h3>
                    <p className="lead">{"Denne elevkvelden skal vi lære om studieteknikk med Olav Schewe. Å lykkes som elev og student handler ikke bare om å være smart. Faktisk mener psykologer nå at så mye som 70% av det vi lærer skyldes studieteknikk og motivasjon. Denne elevkvelden skal vi lære hvordan studenter og elever kan bli bedre til å lære ved hjelp av studieteknikk."}</p>
                    <h3>Når?</h3>
                    <p className="lead">{"25. November kl 18:00 - 19:30."}</p>
                    <h3>Hvor?</h3>
                    <p className="lead">{"Digitalt. Meld deg på nedefor, så vil du få tillsendt en link til elevkvelden. Linken kommer samme dag som elevkvelden."}</p>
                    <h3>Påmelding</h3>
                    <a className="lead" href={"https://s.ntnu.no/elevkveld"} target="_blank" rel="noopener noreferrer">{"https://s.ntnu.no/elevkveld"}</a>
                </div> 
                <div className="olav-video-container">
                    <h2 className="olav-video-header">Olav Schewe</h2>
                    <iframe className="olav-video" title="OlavSchewe" src="https://www.youtube.com/embed/McDTOVngLr8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="info-container info-container-olav">
                <div className="image-container-olav">
                    <img src={noiceCancelling} alt="airpods"></img>
                </div>
                <div className="info-text info-text-olav">
                    <h2>Konkurranse</h2>
                    <p className="lead">Elevkvelden avsluttes med en kahoot med fete premier! Det blir mulighet til å vinner støydempende headsett, magisk julekule og kanskje noe annet gøy!</p>
                    <p className="lead"><a href="https://www.bose.com/en_us/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html#v=qc35_ii_black" target="_blank" rel="noopener noreferrer">Støydempende headsett</a></p>
                    <p className="lead"><a href="https://www.vitenwahl.no/alle/nyheter/julekula.html" target="_blank" rel="noopener noreferrer">Magisk julekule</a></p>
                </div>
            </div>
        </div>
    );
}

export default Elevkveld191120;

