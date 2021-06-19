import React from 'react';

class SearchBar extends React.Component {

    //term is the value that is contained within the search bar
    state = {term:'Enter a Search here'};
    //onFormSubmite takes an event as a prop, 
    onFormSubmit = (event) => {
        //prevents the page from being refreshed when a user enters a value in the search bar
        event.preventDefault();
       
        // For the callback function that was passed as props  we write this.props to access it and onSubmit, can be named anything but to make it obvouis that 
        //the call back function that was passed is the same as the call back function sent as props form the hirearchy
        // and of course what is being sent back up is  the userinput
        this.props.onSubmit(this.state.term)
    };

    render() {
        return (
        <div className="ui segment"> 
        {/* passes a refrence to the onformSubmit function
        we have to call it onForm submit becasue that is required by form components  */}
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    {/**to refrence the above method */}
                    {/**oninput change is a call back function that will be invoked once the user enters some input */}
                    {}
                    <input 
                        type="text" 
                        value={this.state.term} 
                        //  to access the value inside of the event since we are passing back its e.target.value
                        onChange={(e) => this.setState({term:e.target.value})}/> 
                </div>
            </form>
        </div>)
    }
}

export default SearchBar;