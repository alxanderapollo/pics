import React from 'react';
import SearchBar from './SearchBar';
//changed from functional component App to a class component
class App extends React.Component{

    //what we are doing:
    //we are passing a callback function into the search bar class
    //the search bar recives that call back function and in there we invoke the callback 
    //and to refrence the props we write this.props.onSubmit(this.state.text)
    //with what the user passes in, and that is passed back up into the app class component
    //where it is rendered
    onSearchSubmit(term){
        console.log(term);
    }

    render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            {/* we use onSubmit  because thats the name of the function for the form components,
            we dont need to name it that, properties or props can be named anything we like */}
            <SearchBar onSubmit = {this.onSearchSubmit} />
        </div>
    );
    }
}
export default App;