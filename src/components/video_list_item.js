import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {  //changing (props) for ({video}) is the same as (props) => { const videoItems = prop.videos; }
    // const videoItems = props.videos;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{ video.snippet.title }</div> 
                </div> 
            </div> 
        </li>
    );
};

export default VideoListItem;