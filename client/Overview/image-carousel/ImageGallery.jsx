import React from 'react';
import Carousel from './Carousel.jsx';
// import ThumbnailList from './ThumbnailList.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    // this.containerRef = React.createRef();
    this.state = {
      imageIndex: 0,
      thumbNailIndex: 0,
      zoomedIn: false,
      // photos: props.selectedStyle.photos
    }
    this.zoomFunction = this.zoomFunction.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.scrollThumbnailUp = this.scrollThumbnailUp.bind(this);
    this.scrollThumbnailDown = this.scrollThumbnailDown.bind(this);
    this.clickThumbnail = this.clickThumbnail.bind(this)
  }


  nextImage() {
    this.moveImage(true)
  }

  previousImage() {
    this.moveImage(false)
  }

  moveImage(next) {
    var movement = next ? 1 : -1
    this.setState({
      imageIndex: this.state.imageIndex + movement,
      thumbNailIndex: this.state.thumbNailIndex + movement
    })
  }

  scrollThumbnailUp() {
    this.setState({
      thumbNailIndex: this.state.thumbNailIndex - 1
    })
  }

  scrollThumbnailDown() {
    this.setState({
      thumbNailIndex: this.state.thumbNailIndex + 1
    })
  }

  zoomFunction() {
    this.setState({
      zoomedIn: !zoomedIn
    })
  }

  // set major image index to index of thumbnail clicked
  clickThumbnail() {
    var newIndex = this.props.selectedStyle.photos.findIndex(element => element.thumbnail_url === event.target.src)
    console.log('this is newIndex', newIndex)
    this.setState({
      imageIndex: newIndex,
    })
  }



  render() {
    const carouselStyle = {
      height: '100%',
      width: '100%',
      backgroundColor: '#ddd',
      position: 'relative',
    }
    return (
      <div style={carouselStyle} >
        <Carousel style={carouselStyle} photos={this.props.selectedStyle.photos} imageIndex={this.state.imageIndex} onImageClick={this.zoomFunction} nextImage={this.nextImage} prevImage={this.previousImage} thumbnailIndex={this.state.thumbnailIndex} scrollThumbnailUp={this.scrollThumbnailUp} scrollThumbnailDown={this.scrollThumbnailDown} clickThumbnail={this.clickThumbnail}>
        </Carousel>
      </div>


    )
  }
}

export default ImageGallery;






{/* <div style={carouselStyle} >
<Carousel  photos={this.state.photos} imageIndex={this.state.imageIndex} onImageClick={this.zoomFunction} nextImage={this.nextImage} prevImage={this.previousImage}>
  <ThumbnailList photos={this.state.photos} thumbNailIndex={this.state.thumbNailIndex} scrollThumbnailUp={this.scrollThumbnailUp} scrollThumbnailDown={this.scrollThumbnailDown}>
  </ThumbnailList>
</Carousel> */}




// <Carousel style={carouselStyle} photos={this.state.photos} imageIndex={this.state.imageIndex} onImageClick={this.zoomFunction} nextImage={this.nextImage} prevImage={this.previousImage} thumbnailIndex={this.state.thumbnailIndex} scrollThumbnailUp={this.scrollThumbnailUp} scrollThumbnailDown={this.scrollThumbnailDown} >



    // this.setState((prev) => {
    //   var imageIndex = prev.imageIndex + movement;
    //   return {imageIndex}
    // })