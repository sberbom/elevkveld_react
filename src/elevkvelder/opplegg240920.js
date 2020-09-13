import React from 'react';
import '../style/opplegg.css'
import Header from '../components/header'
import Rakett from '../files/rakett.JPG'
import Video from '../components/video'


function Opplegg040320(props) {
    return (
        <div>
            <Header
                backgroundImage={Rakett}
                text={"Ballongbil race!"}
            />
            <div className="info-opplegg-container">
                <p>
                    Denne elevkvelden er det om å gjøre å lage bilen som kjører lengst! 
                    I rommet dere er i finner dere masse utstyr dere kan bruke til å lage bilen. 
                    Dere skal lage hver deres bil og konkurrere mot hverandre. 
                    Hvordan du lager bilen er helt opp til deg selv! Her kan du forske og finne ut hvilke 
                    design som gir det best resultatet. Når du skal lage bilen er det to ting du bør tenke på:
                </p>
                <ul>
                    <li>Mye motorkraft fremover – Skal bilen gå langt trenger den en bra motor.</li>
                    <li>Lite friksjonskraft bakover – Det hjelper ikke med bra motor hvis bilen har bremsene på. Her må du sørge for at bilen ruller bra.</li>
                </ul>
                <p>
                    Det er fult lov å prøve og teste ut hjemme før elevkvelden! Finner du noe bra utstyr du vil ha med for å lage bilen
                    på elevkvelden er det lov å ta med dette hjemmefra.
                </p>
                <p>
                    Er det noe du lurer på er det bare å spørre mentoren din!
                </p>
                <Video video={"https://www.youtube.com/embed/K8hu5Y-9AZ8"} videoTitle={"Ballongbil"}/>
            </div>
        </div>
    )
}

export default Opplegg040320;