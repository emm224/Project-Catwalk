import React from 'react';
import CurrentStyle from './CurrentStyle.jsx';

const StyleList = (props) => {

  return (
    <div>
      {
        props.styles.map((style, index) => {
          return (
            <CurrentStyle
              style={style}
              key={style.style_id}
              style_id={style.style_id}
              setPickedStyle={props.setPickedStyle}
              selectedStyle={props.selectedStyle}
              resetSizeAndQuantity={props.resetSizeAndQuantity}
            />
          )
        })
      }
    </div>
  )
}

export default StyleList;
