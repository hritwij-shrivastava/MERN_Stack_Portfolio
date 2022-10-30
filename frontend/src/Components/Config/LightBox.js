import React, { Component } from 'react'
import Lightbox from "react-image-lightbox";

export default class LightBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false
        };
    }
    
    update = () => {
        this.setState({isOpen:true})
    }
    render() {
        const { photoIndex, isOpen } = this.state;
        const images = this.props.images
        return (
            <>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </>
        )
    }
}
