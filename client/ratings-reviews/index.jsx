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
    };
    this.getReviewsandRatings = this.getReviewsandRatings.bind(this);
    this.sortRelevance = this.sortRelevance.bind(this);
    this.sortHelpful = this.sortHelpful.bind(this);
    this.sortNew = this.sortNew.bind(this);
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.id !== prevProps.id) {
      this.getReviewsandRatings();
      this.sortRelevance();
    }
  };
  
  getReviewsandRatings() {
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

  render() {
    return (
      <div>
        {this.props.id ?
          <HeaderStyle>RATINGS & REVIEWS
            <RateReviewStyle>
              <Ratings metadata={this.state.metadata}/>
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
