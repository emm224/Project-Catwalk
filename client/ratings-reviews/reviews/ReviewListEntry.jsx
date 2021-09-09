import react from 'react';

const ReviewListEntry = ({review}) => (
  <div className='review-entry'>
    <li>
      <a>{review.summary}</a>
    </li>
  </div>
)

export default ReviewListEntry;