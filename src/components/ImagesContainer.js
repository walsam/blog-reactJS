import React from 'react';

class ImagesContainer extends React.Component {
    render() {
        let showImage = true;
        const {images} = this.props;
        if(images.length < 1 || images == undefined){
            showImage = false;
        }
        return (
            <div className="partial-designer-canvas-crop">
                <div>
                    {
                        showImage &&
                        <img src={
                            "http://localhost:8000".concat(images[0].url)
                        } style={{
                            maxWidth: "500px",
                            maxHeight: "500px",
                            transform: "scale(-50%, -50%)"
                        }} alt="image"></img>
                    }
                </div>
            </div>
        );
    }
}

export default ImagesContainer;

