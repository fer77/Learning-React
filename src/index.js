import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyDm8la3kNoy3e-MgO03WF-qegcoo2qdtgk';

//1.  Create a new component, that will produce some HTML

const App = () => {
    return <div>Hello!</div>;
}

//2.  Put this component's generated HTML on the DOM (page)
ReactDOM.render(<App />, document.querySelector('.container'));