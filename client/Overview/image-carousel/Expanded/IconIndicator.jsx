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
          <div id={index === props.selectedIndex ? 'selected-icon' : 'notSelected'} key={index} onClick={()=>{selectIcon(index)}} className='modal-icon'></div>
        // </div>
      )
    })
  )
}



export default IconIndicator;