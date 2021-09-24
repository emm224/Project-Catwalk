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
          recommended={props.metadata.recommended}
          resetFilter={props.resetFilter}
          f5={props.f5}
          f4={props.f4}
          f3={props.f3}
          f2={props.f2}
          f1={props.f1}
        />

        <ReviewBreakdown characteristics={props.metadata.characteristics} />


      </RatingsStyle>
    : ''}
  </div>
);


var RatingsStyle = styled.div`
`;
var Text = styled.div`
  margin-right: 10px;
`;

export default Ratings;