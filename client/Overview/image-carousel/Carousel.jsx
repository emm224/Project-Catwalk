import React from 'react';
import ImageList from './ImageList.jsx';
import styled from 'styled-components';
import ThumbnailList from './ThumbnailList.jsx'

// import { ArrowButtonLeft, ArrowButtonRight } from './ArrowButtons';

const Carousel = (props) => {
  if (!props.photos) {
    return null;
  }

  return (
    <div className='carousel-container'>
      <ImageList className="imageList"
        photos={props.photos}
        imageIndex={props.imageIndex}
        onImageClick={props.onImageClick}
        imageIndex={props.imageIndex}
        prevImage={props.prevImage}
        nextImage={props.nextImage}
        thumbnailIndex={props.thumbnailIndex}
        scrollThumbnailUp={props.scrollThumbnailUp}
        scrollThumbnailDown={props.scrollThumbnailDown}
        clickThumbnail={props.clickThumbnail}
      />
    </div>
  );
};


export default Carousel;


{/* <ThumbnailList
photos={props.photos}
thumbnailIndex={props.thumbnailIndex}
scrollThumbnailUp={props.scrollThumbnailUp}
scrollThumbnailDown={props.scrollThumbnailDown}
clickThumbnail={props.clickThumbnail}
/> */}




{/* <ThumbnailList photos={props.photos} thumbnailIndex={props.thumbnailIndex} scrollThumbnailUp={props.scrollThumbnailUp} scrollThumbnailDown={props.scrollThumbnailDown} /> */ }
























        // cursor={props.cursor}
        // displayWidth={props.dimensions.width}