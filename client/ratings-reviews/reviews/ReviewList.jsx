import React from 'react';
import styled from 'styled-components';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => (
  <ReviewListStyle>

    {props.reviews.length} reviews, sorted by <u>relevance ∨</u>
    {props.reviews.map((review) => <ReviewListEntry review={review} key={review.review_id}/>)}

    <ReviewButtonsStyle>
      <MoreReviews />
      <AddReview />
    </ReviewButtonsStyle>

  </ReviewListStyle>
);

var ReviewButtonsStyle = styled.div`
  display: flex;
`;

var ReviewListStyle = styled.div`
  width: 650px;
`;

export default ReviewList;