import React from 'react';
import './VideoDetail.css'


    const VideoDetail = (props) => {
        console.log(props)
        if(!props.video) {
            return <div>Loading</div>
        }
    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

    return(
        <div className="video-detail">
            <iframe title="video-player" src={videoSrc} />
            <h2>{props.video.snippet.title}</h2>
            <span>{props.video.snippet.description}</span>   
        </div>
    )
}

export default VideoDetail;