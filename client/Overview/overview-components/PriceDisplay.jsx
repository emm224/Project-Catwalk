import React from 'react';

const PriceDisplay = (props) => {
  if (!props || !props.selectedStyle) {
    return ''
  }
  // if sale strike out original
  // display sale price
  // else display original price
  if (props.selectedStyle.sale_price) {
    return (
      <div>
        <text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>${props.selectedStyle.original_price}</text>
        <text style={{color: 'red'}}>${props.selectedStyle.sale_price}</text>
      </div>
    )
  } else {
    return (
        <h3>${props.selectedStyle.original_price}</h3>
    )
  }
}

export default PriceDisplay;