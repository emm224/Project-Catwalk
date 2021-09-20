import React from 'react';
import styled from 'styled-components'

const CurrentStyle = (props) => {
  if (!props.style_id || !props.style) {
    return ''
  }


  const updateStyle = (event) => {
    props.resetSizeAndQuantity()
    var styleId = event.target.value;
    // console.log('this is target value', event.target)
    console.log('hello')
    // reset size and quantity
    return props.setPickedStyle(props.style_id)
  }

  return (
      <SelectorIcon className="style-selector-icon" value={props.style_id} currentStyle={props.style.photos[0].thumbnail_url} onClick={updateStyle} />
  )
}


var SelectorIcon = styled.div`
height: 50px;
width: 50px;
display: inline-block;
background-image: url('${props => props.currentStyle}');
background-size: center;
margin-top: 5px;
margin-left: 10px;
margin-right: 10px;
border: #1e1d51 solid 1px;
opacity: 0.8;
border-radius: 50%
`



export default CurrentStyle;


// <img className="style-selector-icon" value={props.style_id} src={props.style.photos[0].thumbnail_url} onClick={updateStyle} />