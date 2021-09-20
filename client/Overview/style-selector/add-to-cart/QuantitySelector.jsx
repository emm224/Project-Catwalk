import React from 'react';


const QuantitySelector = (props) => {

  if (!props.currentSkuId || !props.selectedStyle.skus[props.currentSkuId]) {
    return (
      <div>
        <select disabled></select>
        {/* {console.log('this is props.selectedStyle', props.selectedStyle)} */}
      </div>
    )
  }


  const stock =  props.selectedStyle.skus[props.currentSkuId].quantity


  const displayMaxQuantity = (stock > 15) ? 15 : stock

  const arrOfQuantities = [];
  for (let quantity = 1; quantity <= displayMaxQuantity; quantity++) {
    arrOfQuantities.push(quantity);
  }

  return (
    <select value={props.currentQuantity} onChange={props.chooseQuantity}>
      <option value={null}>SELECT QUANTITY</option>
      {/* {console.log('this is stock variable', stock)}
      {console.log(arrOfQuantities)} */}
      {
        arrOfQuantities.map((quantity, index) => {
          return (
          <option value={quantity} key={index}>{quantity}</option>
          )
        })
      }
    </select>
  )

}

export default QuantitySelector;