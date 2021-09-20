import React from 'react';
import axios from 'axios';
import ImageGallery from './image-carousel/ImageGallery.jsx';
import styled from 'styled-components';
import ProductDetail from './overview-components/ProductDetail.jsx';
import PriceDisplay from './overview-components/PriceDisplay.jsx';
import StyleSelector from './style-selector/StyleSelector.jsx';
import ProductDescription from './overview-components/ProductDescription.jsx'

class Product extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      currentProduct: '',
      selectedStyle: null,
      styles: []
    }
    this.setPickedStyle = this.setPickedStyle.bind(this);
  }

  componentDidMount() {
    var defaultProduct = {
      params: {
        id:'37311'
      }
    }

    axios.get('/api/products/product', defaultProduct)
      .then((defaultProductInfo) => {
        console.log(defaultProduct)
        this.setState({
          currentProduct: defaultProductInfo.data
        })
        // console.log('default product', defaultProductInfo.data)
      })
      .catch(err => {
        console.log(err)
      })
    axios.get('/api/products/productStyles', defaultProduct)
      .then((defaultProductStyles) => {
        this.setState({
          styles: defaultProductStyles.data.results,
          selectedStyle: defaultProductStyles.data.results[0]
        })
        console.log(defaultProductStyles.data.results[0]);
      })
  }

  setPickedStyle(styleId) {
    console.log('this is styleId', styleId)
    var newStyle = this.state.styles.find(style => style.style_id === styleId);
    console.log('this is new style', newStyle)
    this.setState({
      selectedStyle: newStyle
    })
  }

  render() {
    // return (
    //   <div>
    return (
    <Grid className="grid">
      <LeftContainer className="leftContainer">
      {(!this.state.selectedStyle) ? <div></div> :  <ImageGallery selectedStyle={this.state.selectedStyle}/> }
      </LeftContainer>
      <RightContainer className="rightContainer">
        <ProductDetail currentProduct={this.state.currentProduct}/>
        <PriceDisplay selectedStyle={this.state.selectedStyle}/>
        <StyleSelector selectedStyle={this.state.selectedStyle} styles={this.state.styles} setPickedStyle={this.setPickedStyle}/>
      </RightContainer>
      <ProductDescription currentProduct={this.state.currentProduct}/>
    </Grid>
    )
  }
}

var Grid = styled.div`
  display: grid;
  grid-template-columns: 600px 600px;
  margin-top: 20px;
  margin-bot: 20px
`
// set left container to 100% width
var LeftContainer = styled.div`
  display: grid;
  grid-column-start: 1;
  grid-column-end: 2;
  min-height: 500px;
  max-width: 100%;
`

var RightContainer = styled.div`
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  max-width: 700px
`

export default Product
