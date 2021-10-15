import React from 'react';

class SizeSelector extends React.Component {


  render() {
    const skusObj = this.props.selectedStyle.skus
    if (!skusObj) {
      return (
        <div id='size-selector'>OUT OF STOCK</div>
      )
    }

    const arrayOfSkus = [];
    Object.keys(skusObj).forEach((key) => arrayOfSkus.push(key));

    return (
      <select value={this.props.currentSkuId} onChange={this.props.updateSku} id="size-selector">
        <option value={null}>Select Size</option>
        {arrayOfSkus.map((sku, index) => {
          if (skusObj[sku].quantity > 0) {
            return (
              <option value={sku} key={index} className="txn-data">{skusObj[sku].size}</option>
            )
          }
        })}
      </select>
    )
  }
}


export default SizeSelector;



{/* <select value={this.props.selectedSku} onChange={this.props.updateSku} className="size-selector">
<option value={null}>Select Size</option>
{arrayOfSkus.map((sku, index) => {
  if (skusObj[sku].quantity > 0) {
    console.log('this is sku', sku)
    return (
      <option value={skusObj[sku].size} key={index} className="txn-data">{skusObj[sku].size}</option>
    )
  }
})}
</select> */}