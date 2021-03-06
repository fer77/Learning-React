import _ from 'lodash'; //using lodash to throtle user input in the search bar.
import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //If it is an installed file (npm, library) we need to just name the package.
import SearchBar from './components/search_bar'; //If it is a file we created use the relative path.
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDm8la3kNoy3e-MgO03WF-qegcoo2qdtgk';

//1.  Create a new component, that will produce some HTML
class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { 
            videos: [],
            selectedVideo: null 
        }; //Selecting a video >> pass it to VideoDetail
        
        this.videoSearch('surfboards');
        
}

videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            }); //Kickoff request for the videos and change state again.
    });
}
    
    render() {
        
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300) //debounced version of video search.
        
        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail video={ this.state.selectedVideo } />
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos} />
        </div>
  );
 }
}

//2.  Put this component's generated HTML on the DOM (page)
ReactDOM.render(<App />, document.querySelector('.container'));