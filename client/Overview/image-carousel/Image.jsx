
import React from 'react';
import styled from 'styled-components';

const Image = (props) => {

  const zoomIn = () => {
    props.onImageClick()
    console.log('poopy')
  }

  return (
    // <ImageDiv imageUrl={props.imageUrl} className="imageDiv"/>
    <img id={props.imageIndex} id='img-viewer' className='default-image' src={props.imageUrl} onClick={zoomIn} onMouseMove={props.onMouseMove}/>
  )
}


// var ImageDiv = styled.div`
//     height: 100%;
//     width: 100%;
//     display: flex;
//     background-image: url('${props => props.imageUrl}');
//     background-size: cover;
//     cursor: pointer;
//     position: absolute;
//     transition: all 150ms linear;
//     min-height: 100%
//     justify-content: center;
//   `;
export default Image;

// <ImageDiv>
// <img src={props.imageUrl} />
// </ImageDiv>