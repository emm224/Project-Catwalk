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
      ratings: []
    };
    //bind
  }

  componentDidMount() {
    // this.getReviews();
    // this.getRatings();
  };

  getReviews() {
    axios.get('/reviews')
      .then(({data}) => {
        console.log(data);
        // this.setState({
        // reviews:
        // });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  getRatings() {
    axios.get('/reviews/meta')
    .then(({data}) => {
      console.log(data);
      // this.setState({
      // ratings:
      // });
    })
    .catch((err) => {
      console.log(err);
    })
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