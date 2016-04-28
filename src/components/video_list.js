import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    //we'll need to loop over the array we get from API. Try not use a 'for' loop, instead use a built in iterator like '.map'
    const videoItems = props.videos.map((video) => { 
        return (
            <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} />
        );
    });
    
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
