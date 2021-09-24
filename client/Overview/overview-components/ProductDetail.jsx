import React from 'react';
import styled from 'styled-components'

const ProductDetail = (props) => {
  if (!props || !props.currentProduct) {
    return ''
  }
  return (
    <ProductDetails className='product-detail'>
      <ProductCategory>
        {props.currentProduct.category}
        </ProductCategory>
      <ProductName>
        {props.currentProduct.name}
        </ProductName>
    </ProductDetails>
  )
}

var ProductDetails = styled.div`
  display: block;
`;

var ProductCategory = styled.div`
  font-size: 24px;
  font-weight: lighter
  margin-top: 10px;
  margin-bot: 10px;
`;

var ProductName = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bot: 10px;
`;
export default ProductDetail;