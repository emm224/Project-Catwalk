import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import config from '../config.js';
import axios from 'axios';

import RelatedList from './relatedComparison/RelatedList.jsx';
import RateReview from './ratings-reviews/index.jsx';
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
      index: 0
    };

    this.fetchProductID = this.fetchProductID.bind(this);
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


  render () {

    return (

    <div>
      <TitleHeader>
        <h1 >Team Orcus LOGO</h1>
      </TitleHeader>


      <div id ='relatedAndComparison'>
          <RelatedList />
          <Outfit />

      </div>

      <div id ='questionsAnswers'>
        {/* {console.log('PRODUCT ID', this.state.productID)} */}
          <QuestionsAndAnswers
            productID={this.state.productID} />
      </div>

      <div id='rateReview'>
          <RateReview />
      </div>

    </div>)
  }
}

export default App;