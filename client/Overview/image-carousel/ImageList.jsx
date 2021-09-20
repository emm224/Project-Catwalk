import React, { useState } from 'react';
import Image from './Image.jsx'
import styled from 'styled-components';

const ImageList = (props) => {
  // const [current, setCurrent] = useState(0)
  // const length = props.slides.length

  const style = {
    width: '300px',
    height: '400px',
  }

  const showLeftArrow = props.imageIndex > 0;

  // show right arrow as long as not last item of array
  const showRightArrow = props.imageIndex < (props.photos.length - 1);


  return (
    <div className="testDiv">
      <ImageFrame className="image-frame">
        <Image imageUrl={props.photos[props.imageIndex].url} />
        <ArrowLeft
          show={showLeftArrow}
          onClick={props.prevImage}>
          &lt;
        </ArrowLeft>
        <ArrowRight
          show={showRightArrow}
          onClick={props.nextImage}>
          &gt;
        </ArrowRight>
      </ImageFrame>
    </div>
  )
}

// forces image to certain size no bigger no less
// margin: 0 auto centers
var ImageFrame = styled.div`
  height: 500px;
  width: 400px;
  display: flex;
  overflow: hidden;
  flex-wrap: no-wrap;
  position: relative;
  margin: 0 auto

`;

const ArrowLeft = styled.button`
  border: none;
  position: absolute;
  top: 50%;
  left: 24px;
  cursor: pointer;
  font-size: 2rem;
  display: ${props => props.show ? 'inline-block' : 'none'};
  transform: translate(-50%, -50%)
  z-index: 1;
`;


const ArrowRight = styled.button`
  border: none;
  position: absolute;
  top: 50%;
  right: 24px;
  cursor: pointer;
  font-size: 2rem;
  display: ${props => props.show ? 'inline-block' : 'none'};
  transform: translate(-50%, -50%)
  z-index: 1;
`;



export default ImageList;


// {props.photos.map((slide, index) => {
//   return (
//     <Image className="Image"
//       imageUrl={slide.url}
//       key={index}
//     />
//   )
// })}
