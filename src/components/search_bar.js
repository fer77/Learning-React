import React, { Component } from 'react'; //Even tho we are not making a call to React, we still need this if we are using JSX.

class SearchBar extends Component { //this gives SearchBar functionality from React.Component.
    //initializing state.
    constructor(props) {
        //this calls the parent method.
        super(props);
        
        //To initialize state crate a new obj. and assign it to this.state.  Term is the property that records the value of the input.
        //Only inside of the constructor function we can change our state like this.
        //Everywhere else in our components we use the method this.setState.
        this.state = { term: '' };
    }
    
    render() { // Every React 'class' component must have a 'render method'.
        return (
        <div>
            <input //Becomes a controlled component by using value...
                value={this.state.term}
                onChange={ event => this.setState({ term: event.target.value }) } />
        </div>
        );
    }
}

export default SearchBar; //export so we can access this module in our index.