import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
    const videos = props.videos.map(video => {
        return <VideoItem video={video} videoSelect={props.selectVideo}/>
    });

    return(
        <div className="video-list">
            {videos}
        </div>
    )
}

export default VideoList;