import React from 'react';
import Header from '../components/header'
import Title from '../components/title'
import Info from '../components/info'
import Video from '../components/video'
import elevkveldforside from '../files/elevkveldforside.jpg'
import "../style/elevkveld261020.css"

const Elevkveld261020 = () => {
  return (
    <div className="elevkveld261020">
      <img className={"img-header mobile"} src={elevkveldforside} alt="header"/>
      <div className={"desktop"}>
        <Header 
          backgroundImage={elevkveldforside}
          text={"Elevkveld med ENT3R Trondheim"}
          />
      </div>
      <Info
        what={"Hva er egentlig realfag? Hvordan kan man bruke realfag? Denne elevkvelden skal vi ha rebus på NTNU Gløshaugen der du får teste nettopp dette. Det blir konkurannser, fete premier, pizza og mye mer!"}
        when={"26. oktober kl. 18:00 - 20:00 og 28. oktober 18:00 - 20:00. Denne gangen skal vi ha to elevkvelder samme uke! En elevkveld på mandag og en elevkveld på onsdag. Husk hvilke du melder deg på!"}
        where={"Mandag: Auditorium EL3"}
        where2={"Onsdag: Auditorium R8"}
        tab1={"Auditorium EL3"}
        tab2={"Auditorium R8"}
        map={"https://use.mazemap.com/#v=1&zlevel=1&center=10.401100,63.418647&zoom=18&campusid=1&sharepoitype=poi&sharepoi=43"}
        map2={"https://use.mazemap.com/#v=1&zlevel=-1&center=10.404362,63.415523&zoom=18&campusid=1&sharepoitype=poi&sharepoi=1948"}
        registrationLink={'https://s.ntnu.no/elevkveld'}
      />
      <Title text={"Heksemel med Andreas Wahl"}/>
      <Video 
        video={"https://www.youtube.com/embed/InZE_K9nwaQ"}
        videoTitle={"HeksemelMedAndreasWahl"}
        info={"På elevkvelden skal dere teste ut heksemel! Sjekk ut hvordan Andreas bruker heksemel til pyro effekter på sine videoer. "}
     />
    </div>
  );
}

export default Elevkveld261020;

