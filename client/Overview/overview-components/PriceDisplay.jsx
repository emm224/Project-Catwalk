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
      <div className='price-display'>
        <div style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>${props.selectedStyle.original_price}</div>
        <div style={{color: 'red'}}>${props.selectedStyle.sale_price}</div>
      </div>
    )
  } else {
    return (
        <div className='price-display'>${props.selectedStyle.original_price}</div>
    )
  }
}

export default PriceDisplay;