// { selectedStyle, styles }
import React from 'react';
import SizeSelector from './SizeSelector.jsx';
import QuantitySelector from './QuantitySelector.jsx';
import styled from 'styled-components';
import axios from 'axios';

class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentSku: '',
      // currentSize: '',
      // currentSkuId: null,
      // currentQuantity: 0,
      inStock: true
    }
    this.addItemToCart = this.addItemToCart.bind(this);
    this.isItemInStock = this.isItemInStock.bind(this);
    // this.updateSku = this.updateSku.bind(this);
    // this.chooseQuantity = this.chooseQuantity.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.selectedStyle !== prevProps.selectedStyle) {
  //     console.log('new style', this.props.selectedStyle)
  //     this.setState({
  //       currentSku: '',
  //       currentSize: '',
  //       currentQuantity: 0,
  //       currentSkuId: null
  //     })
  //   }
  // }

  addItemToCart() {
    var currentSku = {
      params: {
        sku_id: this.props.currentSkuId,
        size: this.props.currentSize,
        style: this.props.selectedStyle.name,
        quantity: this.props.currentQuantity
      }
    }
    // will send a post request for the amount selected
    for (var i = 0; i < this.props.currentQuantity; i++) {
      axios.post('/api/products/cart', currentSku)
        .then((response) => {
          // console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  isItemInStock() {

  }

  // choose size
  // updateSku(event) {
  //   event.preventDefault();
  //   // var optionIndex = event.target.selectedIndex;
  //   // var selectedSku = event.target.childNodes[optionIndex];
  //   var skuId = event.target.value
  //   var selectedSku = this.props.selectedStyle.skus[skuId]
  //   console.log('this is selected SKU', selectedSku)
  //   var selectedSize = event.target.value;
  //   this.setState({
  //     currentSku: selectedSku,
  //     currentSize: selectedSize,
  //     currentSkuId: skuId
  //   })
  // }

  // chooseQuantity() {
  //   var newQuantity = event.target.value
  //   console.log('this is quantity selected', newQuantity)
  //   this.setState({
  //     currentQuantity: newQuantity
  //   })
  // }

  render() {
    return (
      <div className='add-to-cart' >
        <SizeSelector
        currentSku={this.props.currentSku}
        currentSize={this.props.currentSize}
        selectedStyle={this.props.selectedStyle}
        styles={this.props.styles}
        updateSku={this.props.updateSku}
        />
        {/* {console.log(this.props.updateSku)} */}
        <QuantitySelector
        selectedStyle={this.props.selectedStyle}
        chooseQuantity={this.props.chooseQuantity}
        currentQuantity={this.props.currentQuantity}
        currentSkuId={this.props.currentSkuId}
        />
        <button type="button" onClick={this.addItemToCart} className="add-to-cart-button"> Add to Cart </button>
      </div>
    )
  }
}

// var CartFrame = styled.div`
// `

export default AddToCart;