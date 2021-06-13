import React from 'react';
// this component is a state because, at some point 
//we have to use state 
class SearchBar extends React.Component {
    state = {term:'Hi there!'};

    //keeps the form from refreshing everytime the user hits enter on the 
    //search bar

    onFormSubmit(event){event.preventDefault();

    }

    render() {
        return (
        <div className="us segment"> 
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    {/**to refrence the above method */}
                    {/**oninput change is a call back function that will be invoked once the user enters some input */}
                    {}
                    <input type="text" value={this.state.term} onChange={(e) => this.setState({term:e.target.value})}/> 
                </div>
                
            </form>
        </div>)
    }
}

export default SearchBar;