import React from 'react';
import styled from 'styled-components';
import AddReview from './AddReview.jsx';
import MoreReviews from './MoreReviews.jsx';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = (props) => (
  <div className='review-list'>
    {props.reviews.length} reviews, sorted by _____

    <ul>
      {props.reviews.map((review) => <ReviewListEntry review={review} key={review.review_id}/>)}
    </ul>

    <ReviewButtonsStyle>
      <MoreReviews />
      <AddReview />
    </ReviewButtonsStyle>

  </div>
);

var ReviewButtonsStyle = styled.div`
  display: flex;
  margin-left: 10px;
  padding-left: 10px;
`;

export default ReviewList;