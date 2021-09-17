import React from 'react';
import ImageList from './ImageList.jsx';
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons';
import styled from 'styled-components'
// import { ArrowButtonLeft, ArrowButtonRight } from './ArrowButtons';

const Carousel = (props) => {
  if (!props.photos) {
    return null;
  }

  return (
      <ImageList className="imageList" photos={props.photos} imageIndex={props.imageIndex} onImageClick={props.onImageClick} imageIndex={props.imageIndex} prevImage={props.prevImage} nextImage={props.nextImage}/>
  );
};


export default Carousel;





























        // cursor={props.cursor}
        // displayWidth={props.dimensions.width}