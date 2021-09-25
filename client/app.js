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
import Search from './Search.js';

const TitleHeader = styled.div`
  width: 100%;
  display: inline;
  background-image: linear-gradient(120deg, hsla(175,55%,55%,0.7), hsla(235,55%,55%,0.7));
  display: flex;
  justify-content: space-between;
  align-item: center;
  font-family: 'Press Start 2P', cursive;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productID: '37311',//default to 37311 when page load
      productName:'Camo Onesie',
      addItem:{},
      searchTerm: '',
    };

    this.handleClickRelatedList = this.handleClickRelatedList.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  //update currentProductId and currentProduct
  handleClickRelatedList(item){
    // console.log('ITEMMMM', item)
    this.setState({
      productID: item.id,
      productName: item.name
    })
  }
  addtoOutfit(item){
    this.setState({addItem:item})

  }
  handleClickOutgitList(item){
    console.log('clicked')
  }

  handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
    console.log('SearchTerm: ', event.target.value);

  }

  searchSubmit (event, input) {
    event.preventDefault()
    // takes product name submitted and updates productID
    // this.setState({
    //   productName: searchedProduct
    // })
    axios.get('/api/products/productsList')
      .then(({data}) => {
        console.log('this is the data', data)
        for (let i = 0; i < data.length; i++) {
          if (data[i].name.toLowerCase().includes(input.toLowerCase())) {
            console.log('ID: ', data[i].id)
            this.setState({
              productID: data[i].id,
              productName: data[i].name
            })
          }
        }
      })
      .catch(err => {
        console.log(err)
      })
    }

  render () {
    return (
    <div>
      <TitleHeader>
        <h1 >Team Orcus</h1>
        <Search className='search-bar' searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange} searchSubmit={this.searchSubmit}/>
      </TitleHeader>
      <div className = 'contentContainer'>
      <div id='productOverview'>
        <ProductOverview selectedProductID={this.state.productID}/>
      </div>

      <div id ='relatedAndComparison'>
          <RelatedList list = {'related'} onClick = {this.handleClickRelatedList} currentItemId ={this.state.productID} addtoOutfit = {this.addtoOutfit.bind(this)}/>
          <Outfit list = {'outfit'} onClick = {this.handleClickOutgitList} item = {this.state.addItem}/>

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