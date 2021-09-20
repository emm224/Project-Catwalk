import React from 'react';

const ProductDetail = (props) => {
  if (!props || !props.currentProduct) {
    return ''
  }
  return (
    <div>
      <h3>{props.currentProduct.category}</h3>
      <h1>{props.currentProduct.name}</h1>
    </div>
  )
}

export default ProductDetail;