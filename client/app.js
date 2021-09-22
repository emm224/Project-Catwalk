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
      productID: '37311',//default to 37311 when page load
      productName:'',
    };

    this.handleClickRelatedList = this.handleClickRelatedList.bind(this);
  }

  //update currentProductId and currentProduct
  handleClickRelatedList(item){
    console.log('ITEMMMM', item)
    this.setState({
      productID: item.id,
      productName: item.name
    })
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
          <RelatedList list = {'related'} onClick = {this.handleClickRelatedList} currentItemId ={this.state.productID} />
          <Outfit list = {'outfit'} onClick = {this.handleClickOutgitList}/>

      </div>

      <div id ='questionsAnswers'>
        {/* {console.log('PRODUCT ID', this.state.productID)} */}
          <QuestionsAndAnswers
            productID={this.state.productID}
            productName={this.state.productName} />
      </div>

      <div id='rateReview'>
          <RateReview id={this.state.productID}/>
      </div>
      </div>
    </div>)
  }
}

export default App;