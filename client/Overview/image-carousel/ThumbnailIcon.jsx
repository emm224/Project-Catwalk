import React from 'react';
import styled from 'styled-components';

// var styles = {
//   zindex: 10,
//   height: 50px,
//   width: 50px,
//   margintop: 9px,
//   marginleft: 20px,
//   marginright: 20px,
//   border: #1e1d51 solid 1px,
//   opacity: 0.8;
// }
const ThumbnailIcon = (props) => {
  return (
      <img className="thumbnail-icon" src={props.thumbnailUrl} onClick={props.thumbnailClick} />
  )
}

// var Thumbnail = styled.div`
// z-index: 10;
// height: 50px;
// width: 50px;
// margin-top: 9px;
// margin-left: 20px;
// margin-right: 20px;
// border: #1e1d51 solid 1px;
// opacity: 0.8;
// `


export default ThumbnailIcon;


{/* <img className="thumbnail-icon" src={props.thumbnailUrl} onClick={props.thumbnailClick}/> */ }