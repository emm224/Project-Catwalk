import React from 'react';
import Carousel from './Carousel.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      thumbNailIndex: 0,
      zoomedIn: false,
      photos: props.selectedStyle.photos
    }
    this.zoomFunction = this.zoomFunction.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
  }

  nextImage() {
    this.moveImage(true)
  }

  previousImage () {
    this.moveImage(false)
  }

  moveImage(next) {
    var movement = next ? 1: -1
    this.setState({
      imageIndex: this.state.imageIndex + movement
    })
  }

  scrollThumbnailUp () {

  }

  scrollThumbnailDown () {

  }

  zoomFunction () {
    this.setState({
      zoomedIn: !zoomedIn
    })
  }



  render() {
    const carouselStyle = {
      height: '100%',
      width: '100%',
      backgroundColor: '#ddd',
      position: 'relative'
    }
    return (
        <Carousel style={carouselStyle} photos={this.state.photos} imageIndex={this.state.imageIndex} onImageClick={this.zoomFunction} nextImage={this.nextImage} prevImage={this.previousImage}>
        </Carousel>
    )
  }
}

export default ImageGallery;















    // this.setState((prev) => {
    //   var imageIndex = prev.imageIndex + movement;
    //   return {imageIndex}
    // })