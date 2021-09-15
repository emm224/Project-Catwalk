import React from 'react';
import styled from 'styled-components';
import StarBreakdown from './StarBreakdown.jsx';
import ReviewBreakdown from './ReviewBreakdown.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratings: []
    }
    //bind
  }

  render() {
    return (
      <RatingsStyle>
        <StarBreakdown />
        <ReviewBreakdown />
      </RatingsStyle>
    );
  }
}

var RatingsStyle = styled.div`
  margin-left: 25px;
`;

export default Ratings;