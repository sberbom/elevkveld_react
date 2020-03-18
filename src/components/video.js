import React from 'react';
import '../style/video.css'

function Video(props) {
        return(
            <div className="video-container" >
                <p className="video-description lead">
                    {props.info}
                </p>
                    <div className="video">
                        <iframe className="video-iframe" src={props.video} title={props.videoTitle}>
                        </iframe>
                    </div>
                    <a href={props.moreInfo} target="_blank" rel="noopener noreferrer" className="btn btn-primary video-button">{props.moreInfoText}</a>
            </div>
        )
}

export default Video;