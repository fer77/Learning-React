import React from 'react';
import ReactDOM from 'react-dom';

//1.  Create a new component, that will produce some HTML

const App = () => {
    return <div>Hello!</div>;
}

//2.  Put this component's generated HTML on the DOM (page)
ReactDOM.render(<App />, document.querySelector('.container'));