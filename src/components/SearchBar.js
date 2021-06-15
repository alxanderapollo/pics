import React from 'react';
// this component is a state because, at some point 
//we have to use state 
class SearchBar extends React.Component {
    state = {term:'Enter a Search here'};

    //keeps the form from refreshing everytime the user hits enter on the 
    //search bar, preventDefault() prevents the page from being refreshed 
    //everytime we git enter 

    //binds the value
    onFormSubmit = (event) => {
        event.preventDefault();
        //the value of this will make sure that it is always equal to the
        //instnace of search bar
        //console.log(this.state.term)

        // to refrence the function that was passed as props
        //onSubmit refrneces the function that was passed
        //and to refrence that here we write this.props.onSubmit 
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
                        onChange={(e) => this.setState({term:e.target.value})}/> 
                </div>
            </form>
        </div>)
    }
}

export default SearchBar;