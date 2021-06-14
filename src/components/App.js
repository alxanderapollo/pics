import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios'; //lib for helping us manage requests to an api 
//changed from functional component App to a class component
class App extends React.Component{

    //what we are doing:
    //we are passing a callback function into the search bar class
    //the search bar recives that call back function and in there we invoke the callback 
    //and to refrence the props we write this.props.onSubmit(this.state.text)
    //with what the user passes in, and that is passed back up into the app class component
    //where it is rendered
    async onSearchSubmit(term){
        //get request for axios, making requests with axios returns a promise whcih is an object
        //taks 2 params, the first is an address to the place where we want to make a get request to
        //the second is an object  that will have a bunch of options that will allow us to customize what we want
        //hhhtppp is the wbsite where the information will come from
        //search/photos is the end point 
        const response = await axios.get('https://api.unsplash.com/search/photos',{
            //1. Identify ourselves With an Authorization key using a headers object and send a query params to search for items
            params: {query:term},
            headers: {
                Authorization:'Client-ID rigRIcjkvUXH9t2prklbXyHu5V0MnOUOUDwwqTRcecw'
            }
            //.then function will be chained on and be called at some point in the future 
        })
        // .then((response) =>{
        //     //reponse.results.data will give us all the car data
        //     console.log(response.data.results);
        // })
        console.log(response.data.results);
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