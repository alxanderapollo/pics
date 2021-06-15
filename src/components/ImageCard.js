import React from 'react';

class  ImageCard extends React.Component {
    render() {
        //destructing description and urls
        const {description,urls} = this.props.image;
        return (<div>
            {/* getting props and displaying the description  */}
            <img alt={description}
            // reciving image and displaying it it
            src={urls.regular}
            
            />
        </div>);
    }
}
export default ImageCard;