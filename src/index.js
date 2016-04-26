import React from 'react';
import ReactDOM from 'react-dom'; //If it is an installed file (npm, library) we need to just name the package.
import SearchBar from './components/search_bar'; //If it is a file we created use the relative path.

const API_KEY = 'AIzaSyDm8la3kNoy3e-MgO03WF-qegcoo2qdtgk';

//1.  Create a new component, that will produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
 );
}

//2.  Put this component's generated HTML on the DOM (page)
ReactDOM.render(<App />, document.querySelector('.container'));