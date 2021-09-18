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
      metadata: []
    };
    this.getReviewsandRatings = this.getReviewsandRatings.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.id !== prevProps.id) {
      this.getReviewsandRatings();
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

  render() {
    return (
      <HeaderStyle>RATINGS & REVIEWS
        <RateReviewStyle>
          <Ratings metadata={this.state.metadata}/>
          <Reviews reviews={this.state.reviews} />
        </RateReviewStyle>
      </HeaderStyle>
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