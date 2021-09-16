import React from 'react';
import styled from 'styled-components';
import Reviews from './reviews/app.jsx';
import Ratings from './ratings/app.jsx';
import config2 from './config2.js';

class RateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    };
    //bind
  }

  componentDidMount() {
    this.getReviews();
  };

  getReviews() {

  }

  render() {
    return (
      <div>RATINGS & REVIEWS
        <RateReviewStyle>
          <Ratings />
          <Reviews reviews={this.state.reviews} />
        </RateReviewStyle>
      </div>
    )
  }
}

var RateReviewStyle = styled.div`
  display: flex;
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;

`;

export default RateReview;