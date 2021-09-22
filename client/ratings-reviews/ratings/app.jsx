import React from 'react';
import styled from 'styled-components';
import StarBreakdown from './StarBreakdown.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';

const Ratings = (props) => (
  <div>
    {props.metadata.product_id ?
      <RatingsStyle>

        <StarBreakdown
        ratings={props.metadata.ratings}
        recommended={props.metadata.recommended}/>

        <ReviewBreakdown
        characteristics={props.metadata.characteristics}/>

      </RatingsStyle>
    : ''}
  </div>
);


var RatingsStyle = styled.div`
`;

export default Ratings;