import React from 'react';
import styled from 'styled-components';
import ReviewList from './ReviewList.jsx';
import AddReview from './AddReview.jsx';


const Reviews = (props) => (
  <div>
    {props.reviews.length ?
      <ReviewsStyle>
        <ReviewList
          reviews={props.reviews}
          sortNew={props.sortNew}
          sortHelpful={props.sortHelpful}
          sortRelevance={props.sortRelevance}
          characteristics={props.characteristics}
        />
      </ReviewsStyle>
    :
      <NoReview>
        <Text>0 review(s) available</Text>
        <AddReview />
      </NoReview>
    }
  </div>
);

var ReviewsStyle = styled.div`
  float: center;
  margin-bottom: 25px;
`;

var NoReview = styled.div`
  float: center;
  margin-bottom: 25px;
`;

var Text = styled.div`
    margin-bottom: 10px;
`;

export default Reviews;