import React from 'react';

class  ImageCard extends React.Component {
    constructor(props) {
        super(props);
        //CreateRef allows us to reach into the dom and interact with an element
        this.imageRef = React.createRef(); //always initlized in the constructor, and to wire it we pass it as a prop to the desired element 
        this.state = {spans:0} //spans initlized and set to 0
    }
    //life cylce method
    componentDidMount(){
      // call back function to return the hight of an image
      //
      this.imageRef.current.addEventListener('load',this.setSpans); 
    }

    //getting the span value
    setSpans = () =>{
      const height =  this.imageRef.current.clientHeight
      //returing the necessary span hights required for the image to fully display on the screen and the hights is being divided
      //by the number of pixels 
      const spans = Math.ceil(height /10);//rounded up so that itll go to the next highest row 

      this.setState({spans});
    }

    render() {
        //destructing description and urls
        const {description,urls} = this.props.image;
        return (
            // is spaning 
        <div style={{gridRowEnd:`span ${this.state.spans}`}}>
            {/* getting props and displaying the description  */}
            <img ref= {this.imageRef} alt={description}
            // reciving image and displaying it it
            src={urls.regular}
            
            />
        </div>);
    }
}
export default ImageCard;