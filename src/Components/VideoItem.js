import React from 'react';
import './VideoItem.css'

const VideoItem = (props) => {

    return (
        <div className="card" onClick={()=>props.videoSelect(props.video)}>
            <img src={props.video.snippet.thumbnails.medium.url} className="card-img-top" alt="..."/>
            <div className="card-body">
                <p className="card-text">{props.video.snippet.title}</p>
            </div>
        </div>
    )
}

export default VideoItem;