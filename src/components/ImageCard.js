import React from 'react';

class  ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }
    //life cylce method
    componentDidMount(){
      // call back function to return the hight of an image
      this.imageRef.current.addEventListener('load',this.setSpans); 
    }

    //getting the span value
    setSpans = () =>{
        console.log(this.imageRef.current.clientHeight)

    }

    render() {
        //destructing description and urls
        const {description,urls} = this.props.image;
        return (<div>
            {/* getting props and displaying the description  */}
            <img ref= {this.imageRef} alt={description}
            // reciving image and displaying it it
            src={urls.regular}
            
            />
        </div>);
    }
}
export default ImageCard;