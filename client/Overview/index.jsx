import React from 'react';
import axios from 'axios';

class Product extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      products: ''
    }
  }

  render() {
    return (
      <div>
        <ImageGallery />
        <StarRating />
        <ProductDetail />
        <PriceDisplay />
        <StyleSelector />
        <AddToCart />
        <ProductDescription />
        <ProductFeatures />
      </div>
    )
  }

}

export default Product
