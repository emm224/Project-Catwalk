import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';

const Reviews = (props) => (
  <div>
    {props.reviews.length ?
      <ReviewsStyle>
        <ReviewList
          reviews={props.reviews}
          sortNew={props.sortNew}
          sortHelpful={props.sortHelpful}
          sortRelevance={props.sortRelevance}
        />
      </ReviewsStyle>
    : ''}
  </div>
);

var ReviewsStyle = styled.div`
  float: center;
  margin-bottom: 25px;
`;

export default Reviews;