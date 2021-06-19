import './ImageList.css'; //import our css
import ImageCard from './ImageCard';
import React from 'react';

//passing a list of images
const ImageList = props => {
    //we are destructing the json object by making description, id and urls
   const images = props.images.map((image) =>{
    //    Each image has an id, in this case map is taking the id that is sent with the accompaning image and indexing it 
    //react requires an alt property with an image thats why we are getting warnings isnce the images come with a description we can use those
    //passing image card as a prop
       return<ImageCard key= {image.id} image={image}/>
   });
    return <div className="image-list ">{images}</div>
    
}
export default ImageList;
