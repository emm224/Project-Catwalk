import React from 'react';
import StyleList from './StyleList.jsx';
import AddToCart from './add-to-cart/AddToCart.jsx'

class StyleSelector extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSku: null,
      currentSize: null,
      currentSkuId: null,
      currentQuantity: 0
    }
    this.resetSizeAndQuantity = this.resetSizeAndQuantity.bind(this);
    this.updateSku = this.updateSku.bind(this);
    this.chooseQuantity = this.chooseQuantity.bind(this);
  }

  resetSizeAndQuantity() {
    this.setState({
      currentSku: null,
      currentSize: null,
      currentSkuId: null,
      currentQuantity: 0
    }, function() {
      // console.log(this.state)
    })
    // console.log('this is this', this)
    // console.log('this is state', this.state)
    // document.getElementById('size-selector').selectedIndex = 0
  }

  updateSku(event) {
    event.preventDefault();
    // var optionIndex = event.target.selectedIndex;
    // var selectedSku = event.target.childNodes[optionIndex];
    var skuId = event.target.value
    var selectedSku = this.props.selectedStyle.skus[skuId]
    // console.log('this is selected SKU', selectedSku)
    var selectedSize = event.target.value;
    // console.log(this)
    this.setState({
      currentSku: selectedSku,
      currentSize: selectedSize,
      currentSkuId: skuId
    })
  }

  chooseQuantity() {
    var newQuantity = event.target.value
    // console.log('this is quantity selected', newQuantity)
    this.setState({
      currentQuantity: newQuantity
    })
  }

  render() {
    if (!this.props.selectedStyle || !this.props.selectedStyle.name) {
      return ''
    }

    return (
      <div>
      Style > {this.props.selectedStyle.name}
        <StyleList
        selectedStyle={this.props.selectedStyle} styles={this.props.styles}
        setPickedStyle={this.props.setPickedStyle}
        resetSizeAndQuantity={this.resetSizeAndQuantity}
        />
        <AddToCart
        selectedStyle={this.props.selectedStyle} styles={this.props.styles}
        currentSku={this.state.currentSku}
        currentSize={this.state.currentSize}
        currentSkuId={this.state.currentSkuId}
        currentQuantity={this.state.currentQuantity}
        updateSku={this.updateSku}
        chooseQuantity={this.chooseQuantity}
        />
      </div>
    )
  }


}

export default StyleSelector;