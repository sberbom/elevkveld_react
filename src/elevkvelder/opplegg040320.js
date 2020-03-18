import React from 'react';
import '../style/opplegg.css'
import Header from '../components/header'

function Opplegg040320(props) {
    return (
        <div>
            <Header
                backgroundImage={'https://sberbom.s3.eu-north-1.amazonaws.com/rakett.JPG'}
                text={"Programmering!"}
            />
            <div className="info-opplegg-container">
                <p>
                    Denne elevkvelden skal dere prøve å lage deres eget spill eller historie ved hjelp av programmering.
                    Dere skal bruke et programmerings-språk som heter scratch.
                    Verktøyene du trenger for å programmere finner du på nettsiden:
                <a href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted">https://scratch.mit.edu/projects/editor.</a>
                På nettsiden finnes det tutorials på hvordan man brukes scratch.
                </p>
                <p>
                    Under pizzaspisingen senere i dag kan dere vise frem hva dere har laget og vi skal kåre kuleste spill og kuleste historie! Det blir en vinner for kuleste spill og en vinner for beste historie.
                </p>
                <div className="center">
                    <a href="https://scratch.mit.edu/projects/editor/?tutorial=getStarted" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-oppgave">Nettsted for programmering</a>
                    <a href="https://scratch.mit.edu/projects/367443792/" target="_blank" rel="noopener noreferrer" className   ="btn btn-primary btn-oppgave">Eksempel på spill</a>
                    <a href="https://scratch.mit.edu/projects/367445424/" target="_blank" rel="noopener noreferrer" className   ="btn btn-primary btn-oppgave">Eksempel på historie</a>
                </div>
                <p className="text2">For å lære scratch bør du følge veilederen som finnes på nettsiden til scratch. Første gang du går inn på siden vil det komme opp en "Kom i gang" veileder som vist på bilde under.
                Ved å trykke på lyspæra i venste hjørnet på denne veilederen får du tillgang til enda flere veiledere og kan bli enda bedre på å bruke scratch! Er du usikker på noe kan mentoren din hjelpe deg!
                </p>
                <img className="bilde" src="https://sberbom.s3.eu-north-1.amazonaws.com/s_veiledere.png" alt="infobilde scratch" />
            </div>
        </div>
    )
}

export default Opplegg040320;