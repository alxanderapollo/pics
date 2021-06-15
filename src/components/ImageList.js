import React from 'react';

//passing a list if images
const ImageList = props => {
    //we are destructing the json object by making description, id and urls
   const images  = props.images.map(({description,id,urls}) =>{
    //    Each image has an id, in this case map is taking the id that is sent with the accompaning image and indexing it 
    //react requires an alt property with an image thats why we are getting warnings isnce the images come with a description we can use those
       return<img alt={description} key= {id} src ={urls.regular}/>
   });
    return <div>{images}</div>
    
}
export default ImageList;
