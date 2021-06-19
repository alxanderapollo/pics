//How this program works
//1. Class app is made into a React component where a state is initlized as an array of empty images. Unsplash is a internet resource that will be used 
//as an internet api. Since react has a component Hirearchy, We want to create a Search bar component that will contain an onFormSubmit event
// 2. Search bar will recieve onSearchSubmit, which is a call back function uses the Async keyward and away, which is specical kind of function that,
//dynamically updates itself based on the  ( timed) response returned.But before the Search bar reives anything, the function goes into the 
//unsplash API gets our authorization key as well as the url extension and appends /search/photos, this is our data end point
//after that async/await is cleard whatever is passed back up through the onsearch submit will be our state value
//3. by this point our state class obj images, has the searched results requested by the user, It is then passed into the 
//Image List component where it is picked apart by a map using the JSON image id, the map uses each image id and maps it to an image
//which is then sent as key value pair to the Image Card Component. 
//4. The Image Card Component is also a  class component, it uses the lifeCycle method, the purpose of this class component
// is take an image, reference it by way of dom and get the hight of each individual image, and then with that information set the correct spans for each 
//image so that no one image bleeds onto one another and/or contains too much white space.  the constructor initlizes the image ref and a state for a spans param of 0
//componentDidMount takes the current image loads the current image when the spans has been set for that particular image
//set spans is exactly as it sounds, an arrow function that takes no param, creates a hiegh var and is sent to the height of the current image, 
//another var called spans takes height and uses math.ceil and deived it by 10px finally spans is set to the number taken once we've recived the correct span param 

//


import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash'; //lib for helping us manage requests to an api 
import ImageList from './ImageList';
//changed from functional component App to a class component
class App extends React.Component{

    //adding state to this component
    //since what axios returing is an array of images will be initlizing state with an array
    state = {images: [] };
    //what we are doing:
    //we are passing a callback function into the search bar class
    //the search bar recives that call back function and in there we invoke the callback 
    //and to refrence the props we write this.props.onSubmit(this.state.text)
    //with what the user passes in, and that is passed back up into the app class component
    //where it is rendered
    //async keyword to use async, awit we use this when we have a function that is doing something that takes
    //time to resolve stuff
    //async keyword marked with an arrow function
    onSearchSubmit = async (term) =>{
        //get request for axios, making requests with axios returns a promise whcih is an object
        //taks 2 params, the first is an address to the place where we want to make a get request to
        //the second is an object  that will have a bunch of options that will allow us to customize what we want
        //hhhtppp is the wbsite where the information will come from
        //search/photos is the end point 
        const response = await unsplash.get('/search/photos',{
            //1. Identify ourselves With an Authorization key using a headers object and send a query params to search for items
            params: {query:term},
           
            //.then function will be chained on and be called at some point in the future 
        });
        // .then((response) =>{
        //     //reponse.results.data will give us all the car data
        //     console.log(response.data.results);
        // })
        //set our state with all the images as a result
        this.setState({images:response.data.results})
    };
    render(){
    return (
        <div className="ui container" style={{marginTop:'10px'}}>
            {/* we use onSubmit  because thats the name of the function for the form components,
            we dont need to name it that, properties or props can be named anything we like */}
            <SearchBar onSubmit = {this.onSearchSubmit} />
            {/* print the number of images */}
            <ImageList images = {this.state.images}/>
        </div>
    );
    }
}
export default App;