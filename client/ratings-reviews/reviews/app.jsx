import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';

const Reviews = (props) => (
  <ReviewsStyle>
    <ReviewList reviews={props.reviews}/>
  </ReviewsStyle>
);

var ReviewsStyle = styled.div`
  float: center;
`;

export default Reviews;