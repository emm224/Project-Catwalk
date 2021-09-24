import React from 'react';

const ProductDescription = (props) => {
  if (!props.currentProduct) {
    return ''
  }

  return (
    <div className='description-container'>
      <div className='slogan-description' >
        <p className='slogan'><strong>{props.currentProduct.slogan}</strong></p>
        <p className='description'>{props.currentProduct.description}</p>
      </div>
      <div className='features'>
        <ul style={{'listStyleType': 'none'}}>
          {props.currentProduct.features.map((feature, index) => {
            return <li key={index}>✓ {feature.feature} - {feature.value}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default ProductDescription;