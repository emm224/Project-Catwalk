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
      ratings: [],
      product_id: ''
    };
    //bind
  }

  // componentDidMount() {
  //   this.getReviews();
  //   // this.getRatings();
  // };

  // getReviews() {
  //   axios.get('api/products/reviews', {'id': 37311})
  //     .then(({data}) => {
  //       console.log(data);
  //       // this.setState({
  //       // reviews: data
  //       // });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  // getRatings() {
  //   axios.get('api/products/reviews/meta', {'id': 37311})
  //   .then(({data}) => {
  //     console.log(data);
  //     // this.setState({
  //     // ratings: data
  //     // });
  //   })
  //   .catch((err) => {
  //     console.log('Client error');
  //   })
  // }

  render() {
    return (
      <HeaderStyle>RATINGS & REVIEWS
        <RateReviewStyle>
          <Ratings ratings={this.state.ratings}/>
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
`;

var HeaderStyle = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;
export default RateReview;