import React from 'react';
import Carousel from './Carousel.jsx';
import ExpandedCarousel from './Expanded/ExpandedCarousel.jsx';
// import ThumbnailList from './ThumbnailList.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0,
      thumbNailIndex: 0,
      zoomedIn: false,
      zoomLens: false,
    }
    this.zoomFunction = this.zoomFunction.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.scrollThumbnailUp = this.scrollThumbnailUp.bind(this);
    this.scrollThumbnailDown = this.scrollThumbnailDown.bind(this);
    this.clickThumbnail = this.clickThumbnail.bind(this);
    this.setImageIndex = this.setImageIndex.bind(this);
    this.openZoomLens = this.openZoomLens.bind(this);
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
      zoomedIn: !(this.state.zoomedIn)
    })
    { console.log('poopy') }
  }

  // set major image index to index of thumbnail clicked
  clickThumbnail() {
    var newIndex = this.props.selectedStyle.photos.findIndex(element => element.thumbnail_url === event.target.src)
    // console.log('this is newIndex', newIndex)
    this.setState({
      imageIndex: newIndex,
    })
  }

  setImageIndex(index) {
    this.setState({
      imageIndex: index
    })
  }

  // open zoom lens when mouseover expanded image
  openZoomLens (event) {
    event.preventDefault()
    this.setState({
      zoomLens: true
    })
  }


  render() {
    const carouselStyle = {
      height: '100%',
      width: '100%',
      position: 'relative'
    }
    return (
      <div>
        <div style={carouselStyle} >
          <Carousel
            style={carouselStyle}
            photos={this.props.selectedStyle.photos}
            imageIndex={this.state.imageIndex}
            onImageClick={this.zoomFunction}
            nextImage={this.nextImage}
            prevImage={this.previousImage}
            thumbnailIndex={this.state.thumbnailIndex}
            scrollThumbnailUp={this.scrollThumbnailUp}
            scrollThumbnailDown={this.scrollThumbnailDown}
            clickThumbnail={this.clickThumbnail}>
          </Carousel>
        </div>
        {this.state.zoomedIn &&
            <ExpandedCarousel

              photos={this.props.selectedStyle.photos}
              imageIndex={this.state.imageIndex}
              zoomOut={this.zoomFunction}
              nextImage={this.nextImage}
              prevImage={this.previousImage}
              clickIcon={this.setImageIndex}
              openZoomLens={this.openZoomLens}
            >
            </ExpandedCarousel>

        }
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