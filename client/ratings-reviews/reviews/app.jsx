import React from 'react';
import data from '../reviewData.js';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: data[0].results
    }
    //bind
  }

  render() {
    return (
      <ReviewsStyle>
        <ReviewList reviews={this.state.reviews}/>
      </ReviewsStyle>
    )
  }

}

var ReviewsStyle = styled.div`
  float: center;
`;

export default Reviews;