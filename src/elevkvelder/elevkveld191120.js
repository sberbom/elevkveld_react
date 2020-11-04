import React from 'react';
import Header from '../components/header'
import Title from '../components/title'
import Info from '../components/info'
import Video from '../components/video'
import elevkveldforside from '../files/elevkveldforside.jpg'
import "../style/elevkveld261020.css"

const Elevkveld191120 = () => {

    return (
        <div className="elevkveld261020">
        <img className={"img-header mobile"} src={elevkveldforside} alt="header"/>
        <div className={"desktop"}>
            <Header 
            backgroundImage={elevkveldforside}
            />
        </div>
        <Info
            what={"Denne elevkvelden skal vi ha juleavslutning! Det blir film, pizza, snop og god stemming! Vi viser 3 ulike filmer, meld deg på den filmen du vil se!"}
            when={"19. november kl. 18:30 - 21:00."}
            where={"The imitation game: Auditorium R7"}
            where2={"Good Will Hunting: Auditorium S3"}
            where3={"Interstellar: Auditorium KJL1"}
            tab1={"Auditorium R7"}
            tab2={"Auditorium S3"}
            tab3={"Auditorium KJL1"}
            map={"https://use.mazemap.com/#v=1&zlevel=-1&center=10.404623,63.415578&zoom=18&campusid=1&sharepoitype=poi&sharepoi=2035"}
            map2={"https://use.mazemap.com/#v=1&zlevel=1&center=10.404425,63.417382&zoom=18&campusid=1&sharepoitype=poi&sharepoi=1000317817"}
            map3={"https://use.mazemap.com/#v=1&zlevel=1&center=10.404359,63.418691&zoom=18&campusid=1&sharepoitype=poi&sharepoi=873898"}
            registrationLink={'https://s.ntnu.no/elevkveld'}
        />
        <Title text={"The imitation game - Trailer"}/>
        <Video 
            video={"https://www.youtube.com/embed/nuPZUUED5uk"}
            videoTitle={"imitationtrailer"}
        />
        <Title text={"Good Will Hunting - Trailer"}/>
        <Video 
            video={"https://www.youtube.com/embed/nH9LZOXBMUE"}
            videoTitle={"goodwilltrailer"}
        />
        <Title text={"Interstellar - Trailer"}/>
        <Video 
            video={"https://www.youtube.com/embed/zSWdZVtXT7E"}
            videoTitle={"interstellartrailer"}
        />
        </div>
    );
}

export default Elevkveld191120;

