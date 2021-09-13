import React from 'react';
import ReviewListEntry from './ReviewListEntry.jsx';

const ReviewList = ({reviews}) => (
  <div className='review-list'>
    <header> Review List Component</header>
    <ul>
      {/* {reviews.results.map((review) => <ReviewListEntry review={review} key={review.review_id}/>)} */}
    </ul>
  </div>
)

export default ReviewList;