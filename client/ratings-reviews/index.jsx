import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Reviews from './reviews/app.jsx';
import Ratings from './ratings/app.jsx';


class RateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      metadata: {},
      filters: new Set()
    };
    this.getReviews = this.getReviews.bind(this);
    this.getRatings = this.getRatings.bind(this);

    this.sortRelevance = this.sortRelevance.bind(this);
    this.sortHelpful = this.sortHelpful.bind(this);
    this.sortNew = this.sortNew.bind(this);

    this.resetFilter = this.resetFilter.bind(this);
    this.filterFive = this.filterFive.bind(this);
    this.filterFour = this.filterFour.bind(this);
    this.filterThree = this.filterThree.bind(this);
    this.filterTwo = this.filterTwo.bind(this);
    this.filterOne = this.filterOne.bind(this);
  }
  //Page mount and update
  componentDidUpdate(prevProps, prevState) {
    if(this.props.id !== prevProps.id) {
      this.getReviews();
      this.getRatings();
      this.sortRelevance();
    }
  }
  componentDidMount() {
    this.getReviews();
    this.getRatings();
    this.sortRelevance();
  }
  //Get requests
  getReviews() {
    var product = {
      params: {
        id: this.props.id
      }
    }
    axios.get('/api/products/reviews', product)
      .then(({data}) => {
        this.setState({
          reviews: data.results
        });
      })
      .catch((err) => {
        console.log(err);
      })
    console.log(this.state.reviews);
  }
  getRatings() {
    var product = {
      params: {
        id: this.props.id
      }
    }
    axios.get('api/products/reviews/meta', product)
      .then(({data}) => {
        this.setState({
          metadata: data
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }
  //Sort functions
  sortHelpful() {
    var allReviews = this.state.reviews;
    var sorted = allReviews.sort(function(a,b) {
      return b.helpfulness - a.helpfulness;
    })
    this.setState({
      reviews: sorted
    });
  }
  sortNew() {
    var allReviews = this.state.reviews;
    var sorted = allReviews.sort(function(a,b) {
      return new Date(b.date) - new Date(a.date);
    })
    this.setState({
      reviews: sorted
    });
  }
  sortRelevance() {
    var allReviews = this.state.reviews;
    var sorted = allReviews.sort(function(a,b) {
      if(a.helpfulness === b.helpfulness) {
        return new Date(b.date) - new Date(a.date);
      }
      return b.helpfulness - a.helpfulness;
    })
    this.setState({
      reviews: sorted
    });
  }
  //Filter functions
  filterFive() {
    this.state.filters.add(5);
    var helperArr = [];
    var allReviews = this.state.reviews;
    function log(val, set) {
      helperArr.push(val);
    }
    this.state.filters.forEach(log);

    var newReviews = [];
    for (var i = 0; i < helperArr.length; i++) {
      for (var j = 0; j < allReviews.length; j++) {
        if (allReviews[j].rating === helperArr[i]) {
          newReviews.push(allReviews[j]);
        }
      }
    }
    console.log('filtered', newReviews);
    this.setState({
      reviews: newReviews
    })
  }
  filterFour() {
    this.state.filters.add(4);
    var helperArr = [];
    var allReviews = this.state.reviews;
    function log(val, set) {
      helperArr.push(val);
    }
    this.state.filters.forEach(log);

    var newReviews = [];
    for (var i = 0; i < helperArr.length; i++) {
      for (var j = 0; j < allReviews.length; j++) {
        if (allReviews[j].rating === helperArr[i]) {
          newReviews.push(allReviews[j]);
        }
      }
    }
    console.log('filtered', newReviews);
    this.setState({
      reviews: newReviews
    })
  }
  filterThree() {
    this.state.filters.add(3);
    var helperArr = [];
    var allReviews = this.state.reviews;
    function log(val, set) {
      helperArr.push(val);
    }
    this.state.filters.forEach(log);

    var newReviews = [];
    for (var i = 0; i < helperArr.length; i++) {
      for (var j = 0; j < allReviews.length; j++) {
        if (allReviews[j].rating === helperArr[i]) {
          newReviews.push(allReviews[j]);
        }
      }
    }
    console.log('filtered', newReviews);
    this.setState({
      reviews: newReviews
    })
  }
  filterTwo() {
    this.state.filters.add(2);
    var helperArr = [];
    var allReviews = this.state.reviews;
    function log(val, set) {
      helperArr.push(val);
    }
    this.state.filters.forEach(log);

    var newReviews = [];
    for (var i = 0; i < helperArr.length; i++) {
      for (var j = 0; j < allReviews.length; j++) {
        if (allReviews[j].rating === helperArr[i]) {
          newReviews.push(allReviews[j]);
        }
      }
    }
    console.log('filtered', newReviews);
    this.setState({
      reviews: newReviews
    })
  }
  filterOne() {
    this.state.filters.add(1);
    var helperArr = [];
    var allReviews = this.state.reviews;
    function log(val, set) {
      helperArr.push(val);
    }
    this.state.filters.forEach(log);

    var newReviews = [];
    for (var i = 0; i < helperArr.length; i++) {
      for (var j = 0; j < allReviews.length; j++) {
        if (allReviews[j].rating === helperArr[i]) {
          newReviews.push(allReviews[j]);
        }
      }
    }
    console.log('filtered', newReviews);
    this.setState({
      reviews: newReviews

    })
  }
  resetFilter() {
    this.state.filters = new Set();
    console.log(this.state.filters);
    this.getReviews();
    this.sortRelevance();
  }

  render() {
    return (
      <div>
        {this.props.id ?
          <HeaderStyle>RATINGS & REVIEWS
            <RateReviewStyle>
              <Ratings
                metadata={this.state.metadata}
                resetFilter={this.resetFilter}
                f5={this.filterFive}
                f4={this.filterFour}
                f3={this.filterThree}
                f2={this.filterTwo}
                f1={this.filterOne}
              />
              <Reviews
                reviews={this.state.reviews}
                sortRelevance={this.sortRelevance}
                sortHelpful={this.sortHelpful}
                sortNew={this.sortNew}
              />
            </RateReviewStyle>
          </HeaderStyle>
        : ''}
      </div>
    )
  }
}

//Styled Components
var RateReviewStyle = styled.div`
  display: flex;
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: left;
`;
var HeaderStyle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin-left: 200px;
  margin-top: 50px;
`;

export default RateReview;
