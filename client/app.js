import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import config from '../config.js';
import axios from 'axios';

import RelatedList from './relatedComparison/RelatedList.jsx';
import RateReview from './ratings-reviews/index.jsx';
import ProductOverview from './Overview/index.jsx';
import QuestionsAndAnswers from './QuestionsAndAnswers/QuestionsAndAnswers.jsx';
import Outfit from './relatedComparison/Outfit.jsx';

const TitleHeader = styled.div`
  width: 100%;
  display: inline;

  background-color: #525252;
  display: flex;
  justify-content: flex-start;

  &:hover {
    background: linear-gradient(120deg, hsla(175,55%,55%,0.7), hsla(235,55%,55%,0.7));
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: '',
      allProducts: [],
      productIDs: [],
      index: 2,
      currentProduct:{
        "id": 37311,
        "campus": "hr-rfe",
        "name": "Camo Onesie",
        "slogan": "Blend in to your crowd",
        "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        "category": "Jackets",
        "default_price": "140.00",
        "created_at": "2021-08-13T14:37:33.145Z",
        "updated_at": "2021-08-13T14:37:33.145Z",
        "features": [
            {
                "feature": "Fabric",
                "value": "Canvas"
            },
            {
                "feature": "Buttons",
                "value": "Brass"
            }
        ]
    }, // default product object if needed.
    };

    this.fetchProductID = this.fetchProductID.bind(this);
    this.handleClickRelatedList = this.handleClickRelatedList.bind(this);
  }

  componentDidMount() {
    this.fetchProductID();
  }

  fetchProductID() {

    var option={
      headers:{
        'Authorization':config.TOKEN,
        'Content-Type': 'application/json'
      }
    }

    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products`,option)
    .then((results) => {

      this.setState({
        productID: results.data[this.state.index].id,
        productIDs: results.data.map((product) => product.id)
      })
      // console.log('FETCH all IDs: ', this.state.productIDs);

    })
    .catch((error) => {
      console.log('Error retrieving IDs', error)
    });
  }

  //update currentProductId and currentProduct
  handleClickRelatedList(item){
    this.setState({currentProduct: item})
  }
  handleClickOutgitList(item){
    console.log('clicked')
  }

  render () {

    return (

    <div>
      <TitleHeader>
        <h1 >Team Orcus LOGO</h1>
      </TitleHeader>
      <div className = 'contentContainer'>
      <div id='productOverview'>Product Overview Placeholder
        <ProductOverview />
      </div>

      <div id ='relatedAndComparison'>
          <RelatedList list = {'related'} onClick = {this.handleClickRelatedList} currentItem ={this.state.currentProduct} />
          <Outfit list = {'outfit'} onClick = {this.handleClickOutgitList}/>

      </div>

      <div id ='questionsAnswers'>
        {/* {console.log('PRODUCT ID', this.state.productID)} */}
          <QuestionsAndAnswers
            productID={this.state.productID} />
      </div>

      <div id='rateReview'>
          <RateReview id={this.state.productID}/>
      </div>
      </div>
    </div>)
  }
}

export default App;