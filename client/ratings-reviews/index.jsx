import React from 'react';
import styled from 'styled-components';
import Reviews from './reviews/app.jsx';
import Ratings from './ratings/app.jsx';

class RateReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: ''
    }
    //bind
  }


  render() {
    return (
      <div>
        <RateReviewStyle>
          <Ratings />
          <Reviews />
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