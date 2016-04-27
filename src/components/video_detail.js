import React from 'react';

const VideoDetail = ({video}) => { //Our brand, spanking, new ES6 property trick.
    if (!video) {
        return <div>Loading...</div>;
    } //while we wait for our request.
    //crafting our own embed url
    const videoId = video.id.videoId;
    // const url = 'https://www.youtube.com/embed/' + videoId; This works but with ES6 it can be "interpolated" as
    const url = `https://www.youtube.com/embed/${videoId}`;
    
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={ url }></iframe>
            </div>
            <div className="details">
                <div>{ video.snippet.title }</div>
                <div>{ video.snippet.description }</div>
            </div>
        </div>
    );
}

export default VideoDetail;