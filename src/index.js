import React, { Component } from 'react';
import ReactDOM from 'react-dom'; //If it is an installed file (npm, library) we need to just name the package.
import SearchBar from './components/search_bar'; //If it is a file we created use the relative path.
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDm8la3kNoy3e-MgO03WF-qegcoo2qdtgk';

//1.  Create a new component, that will produce some HTML
class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = { videos: [] };
        
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos }); //when key and value are identical (the same name) condense entry like this: {name of variable}.
    });
}
    
    render() {
        return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>
  );
 }
}

//2.  Put this component's generated HTML on the DOM (page)
ReactDOM.render(<App />, document.querySelector('.container'));