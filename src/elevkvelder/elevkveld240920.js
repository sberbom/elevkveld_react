import React from 'react';
import Header from '../components/header'
import Title from '../components/title'
import Info from '../components/info'
import Speakers from '../components/speakers'
import Video from '../components/video'

const Elevkveld040320 = () => {

  return (
    <div>
      <Header 
        backgroundImage={"https://gfx.nrk.no/gpoaLWwZFbfXomJ4R13u_QkgTDqrb04xmNOjMWvJmcew.jpg"}
        text={"Elevkveld med ENT3R Trondheim"}
        />
      <Info
        what={"Hva er egentlig realfag? Hvordan kan man bruke realfag? Og er egentlig realfag viktig? Vi får besøk av Stian Sandø. Han skal fortelle om sine opplevelser med realfag og hvordan han bruker realfag til å gjøre verden til et bedre sted!"}
        when={"24 september kl. 17:30 - 19:30 og 18:30 - 20:30. Denne gangen har vi to elevkvelder samme kveld! Den første elevkvelden starter 17:30 og den andre starter 18:30. Husk hvilke du melder deg på!"}
        where={"Elevkvelden som starter 17:30 møter i S3."}
        where2={"Elevkvelden som starter 18:30 møter i R1."}
        map={"https://use.mazemap.com/#v=1&center=10.404371,63.417343&zoom=18.5&zlevel=1&campusid=1&sharepoitype=poi&sharepoi=1186500"}
        map2={"https://use.mazemap.com/#v=1&center=10.406446,63.415942&zoom=18&sharepoitype=poi&sharepoi=2036&zlevel=-1&campusid=1"}
        registration={`For elevkvelden som starter 17:30 send "Elevkveld" til 1930.`}
        registration2={'For elevkvelden som starter 18:30 send "ENT3R" til 1930.'}
        unregister={'For avmelding send "Elevkveld stopp" til 1930.'}
        unregister2={'For avmelding send "ENT3R stopp" til 1930.'}
      />
      <Title text={"Foredragsholdere"}/>
      <Speakers 
        speaker1={"Stian Sandøe"}
        speaker1_info={"Stian Sandø er blant annet kjent fra Newton og YouTube. Han er en ingenør som elsker realfag. Han er opptatt av ny og spennede teknologi og syntes det er spesielt spennende å finne teknologi som kan hjelpe mennesker!"}
        speaker1_img={"https://www.athenas.no/wp-content/uploads/Stian-Sand%C3%B8r-250.jpg"}
      />
      <Title text={"Stian leker med flytende metall"}/>
      <Video 
        video={"https://www.youtube.com/embed/cZFat2hiCBw"}
        videoTitle={"StianLekerMedFlytendeMetall"}
        info={"Gallium er et av de mer interessante metallene vi vet om. Den er nemlig flytende ved svært lav temperatur, noe som gjør at man kan holde den i hånda mens den er flytende! Sjekk ut denne videoen med Stian"}
     />
    </div>
  );
}

export default Elevkveld040320;