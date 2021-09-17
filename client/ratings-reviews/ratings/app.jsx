import React from 'react';
import styled from 'styled-components';
import StarBreakdown from './StarBreakdown.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';
import metaData from '../metaData.js';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: metaData[0].ratings,
      recommended: metaData[0].recommended,
      characteristics: metaData[0].characteristics
    };
    //bind
  }

  render() {
    return (
      <RatingsStyle>
        <StarBreakdown ratings={this.state.ratings} recommended={this.state.recommended}/>
        <ReviewBreakdown characteristics={this.state.characteristics}/>
      </RatingsStyle>
    );
  }
}

var RatingsStyle = styled.div`
  margin-left: 25px;
`;

export default Ratings;