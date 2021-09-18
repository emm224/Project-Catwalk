import React from 'react';
import styled from 'styled-components';
import StarBreakdown from './StarBreakdown.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import metaData from '../metaData.js';

const Ratings = (props) => (
  <RatingsStyle>
    <StarBreakdown
    ratings={metaData[0].ratings}
    recommended={metaData[0].recommended}/>
    <ReviewBreakdown
    characteristics={props.metadata.characteristics}/>
  </RatingsStyle>
);


var RatingsStyle = styled.div`
`;

export default Ratings;