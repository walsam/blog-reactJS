import React from 'react';
import {Link} from "react-router-dom";
import timeago from "timeago.js";

class ImagesContainer extends React.Component {
    render() {
        let showImage = true;
        const {images} = this.props;
        const size = this.props.nbrImages;
        if(images.length < 1 || images == undefined){
            showImage = false;
        }
        return (
            <div className="partial-designer-canvas-crop">
                <div>
                    {showImage && images.slice(0, size).map(image => (
                        <img src={
                            "http://localhost:8000".concat(image.url)
                        } style={{
                            maxWidth: "250px",
                            maxHeight: "250px",
                        }} alt="image"></img>
                    ))}
                </div>
            </div>
        );
    }
}

export default ImagesContainer;

