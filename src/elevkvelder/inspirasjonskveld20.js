import React from 'react';
import '../style/inspirasjonskveld20.css'
import Header from '../components/header'
import Info from '../components/info'
import Title from '../components/title'

function Inspirasjonskveld20(props) {
        return(
            <div>
                <h1 class="cancelled">Inspirasjonskvelden er avlyst på grunn av COVID-19 viruset</h1>
                <Header 
                    backgroundImage={'https://sberbom.s3.eu-north-1.amazonaws.com/Selda_flamme.JPG'}
                    text={"Inspirasjonskveld med ENT3R Trondheim"}
                    />
                <Info
                    what={"Er du usikker på hva du skal gjøre når du er ferdig på VGS? Lurer du på hva du vil studere etter videregående? Vet du hva du vil studere, men har lyst til å vite mer om studiet? På Inspirasjonskveld med ENT3R får du mulighet til å møte og snakke med studenter fra flere linjer på NTNU!"}
                    when={"24. Mars kl. 18:30 - 20:00"}
                    where={"Vi møter i rom R22 i Realfagsbygget på NTNU Gløshaugen. Mentorene står på Realfagsbygget og hjelper deg med å finne frem. Se kart."}
                    map={"https://use.mazemap.com/#v=1&zlevel=-2&center=10.405944,63.415751&zoom=18&sharepoitype=poi&sharepoi=35317&campusid=1"}
                />
                <Title text={"Hvilke studier kan jeg møte?"}/>
                <div class="study-container">
                    <div className="study">Matematiske fag bachelor</div>
                    <div className="study">Biologi</div>
                    <div className="study">Bygg og miljøteknikk</div>
                    <div className="study">Datateknologi</div>
                    <div className="study">Elektronisk systemdesign og innovasjon</div>
                    <div className="study">Energi og miljø</div>
                    <div className="study">Kybernetikk og robotikk</div>
                    <div className="study">Fornybar energi</div>
                    <div className="study">Fysikk og matematikk</div>
                    <div className="study">Industriell kjemi og bioteknologi</div>
                    <div className="study">Idustriell økonomi og teknologiledelse</div>
                    <div className="study">Ingenørvitenskap og IKT</div>
                    <div className="study">Kjemi ingeniør</div>
                    <div className="study">Kommunikasjonsteknologi</div>
                    <div className="study">Lektor i realfag</div>
                    <div className="study">Marin teknikk</div>
                    <div className="study">Maskin ingeniør</div>
                    <div className="study">Produksajon og produktutvikling</div>
                </div>
            </div>
        )
}

export default Inspirasjonskveld20;