import React from 'react';
import styled from 'styled-components';

class ReviewBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characteristics: this.props.characteristics
    }
  }

  render() {
    return (
      <div>
        <div>Size</div>

          <ScaleStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>

          <ScaleStyle>
            <p>Too small</p>
            <p>Perfect</p>
            <p>Too large</p>
          </ScaleStyle>

        <div>Comfort</div>

        <ScaleStyle>
          <ComfortEndStyle>x</ComfortEndStyle>
          <ComfortMiddleStyle>x</ComfortMiddleStyle>
          <ComfortEndStyle>x</ComfortEndStyle>
        </ScaleStyle>

          <ScaleStyle>
            <p>Poor</p>
            <p>Perfect</p>
          </ScaleStyle>

      </div>
    );
  }
}

var ReviewBreakdownStyle = styled.div`
`;

var ScaleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
`;

var ShadedStyle = styled.div`
  color: lightgray;
  background: lightgray;
  width: 75px;
`;

var ComfortEndStyle = styled.div`
  color: lightgray;
  background: lightgray;
  width: 50px;
`;

var ComfortMiddleStyle = styled.div`
  color: lightgray;
  background: lightgray;
  width: 120px;
`;

export default ReviewBreakdown;