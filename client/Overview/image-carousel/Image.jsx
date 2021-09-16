// export const sliderData = [
//   // {
//   //   image: 'props.selectedStyle.photos[0].url'
//   // }
//   {
//     image: "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
//   },

//   {
//     image: "https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80"
//   },

//   {
//     image: "https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80"
//   },

//   {
//     image: "https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
//   },

//   {
//     image: "https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
//   },

//   {
//     image: "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
//   }
// ]



import React from 'react';
import styled from 'styled-components';

const Image = (props) => {
  return (
    <ImageDiv imageUrl={props.imageUrl}className="imageDiv"/>
  )
}


var ImageDiv = styled.div`
    height: 100%;
    width: 100%;
    display: block;
    background-image: url('${props => props.imageUrl}');
    background-size: cover;
    flex: 0 0 auto;
    cursor: pointer;
    position: absolute;
    aspectRatio:3/2
    transition: all 150ms linear;
  `;
export default Image;

// <ImageDiv>
// <img src={props.imageUrl} />
// </ImageDiv>