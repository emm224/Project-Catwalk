import React from 'react';
import styled from 'styled-components';

const IconIndicator = (props) => {

  var selectIcon = (index) => {
    props.clickIcon(index)
  }
  return (

    props.photos.map((photo, index) => {
      return (
        // <div className='icon-frame'>
          <img id={index === props.selectedIndex ? 'selected-icon' : 'notSelected'} key={index} onClick={()=>{selectIcon(index)}} className='modal-icon' src={photo.thumbnail_url} >{console.log(props.selectedIndex)}</img>
        // </div>
      )
    })
  )
}



export default IconIndicator;