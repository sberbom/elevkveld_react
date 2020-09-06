import React from 'react';
import Header from '../components/header'
import Title from '../components/title'
import Info from '../components/info'
import Speakers from '../components/speakers'
import Video from '../components/video'
import Selda_flamme from '../files/Selda_flamme.JPG'

function Elevkveld040320() {
  return (
    <div>
      <Header 
        //backgroundImage={'https://sberbom.s3.eu-north-1.amazonaws.com/Selda_flamme.JPG'}
        backgroundImage={Selda_flamme}
        text={"Elevkveld med ENT3R Trondheim"}
        />
      <Info
        what={"Er du nysgjerrig  på programmering? Hva er egentlig koding? Hvorfor er realfag viktig for å forstå IT? Er det sant at kunstig intelligens kan erstatte mennesker? Vi får besøk av Madeleine Lorås og Brain NTNU. De skal fortelle oss om nettopp dette. Elevkvelden avsluttes med pizza og brus, og som alt annet i ENT3R er det både gøy og helt gratis!"}
        when={"4. Mars kl. 18:00 - 20:00"}
        where={"Vi møter i auditoriet R7 i Realfagsbygget på NTNU Gløshaugen. Mentorene står på Realfagsbygget og hjelper deg med å finne frem. Se kart."}
        map={"https://use.mazemap.com/#v=1&zlevel=-1&center=10.404623,63.415578&zoom=18&campusid=1&sharepoitype=poi&sharepoi=2035"}
        registration={"Send en melding med 'Elevkveld' til 1930. For avmelding send 'Elevkveld stopp' til 1930"}
      />
      <Title text={"Foredragsholdere"}/>
      <Speakers 
        speaker1={"Brain NTNU"}
        speaker1_info={"Brain NTNU ønsker å vise studenter hvor kult kunstig intelligens kan være! De arrangerer konkurranser og arrangementer der studenter kan se hva kunsteling intelligens kan brukes til! Kan kunsteling intelligens ta over for mennesker?"}
        speaker1_img={"https://pbs.twimg.com/profile_images/1101489659618738177/t44FALYp_400x400.png"}
        speaker2={"Madelaine Lorås"}
        speaker2_info={"Madelaine Lorås forsker på NTNU Excidet. Hun prøver å finne ut hvordan man best lærer å programmere! Sammen med Excited ser hun om studentene blir bedre hvis de får mat når de øver, blir inspirert av kule arrangementer, eller om det beste er å la studentene jobbe på egenhånd."}
        speaker2_img={"https://innsidawls.itea.ntnu.no/user-profile-service/rest/files/c19b6bf0-abd9-381b-8f80-5255f735f048"}
      />
      <Title text={"Jonis besøker Microsoft"}/>
      <Video 
        video={"https://www.youtube.com/embed/UxSOJVjO28o"}
        videoTitle={"JonisBesøkerMicrosoft"}
        info={"En av de som har undersøk hvorfor man trenger programmering er Jonis fra NRK. I videoen får du et lite innblikk i hvorfor programmering er viktig!"}
        moreInfo={"https://velgriktig.no/filmer/fremtidsjobbene-sesong-4/"}
        moreInfoText={"Se mer på Velgriktig.no"}
     />
    </div>
  );
}

export default Elevkveld040320;