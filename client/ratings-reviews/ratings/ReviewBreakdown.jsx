import React from 'react';
import styled from 'styled-components';

class ReviewBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characteristics: this.props.characteristics,
      comfort: this.props.characteristics.Comfort.value,
      fit: this.props.characteristics.Fit.value,
      length: this.props.characteristics.Length.value,
      quality: this.props.characteristics.Quality.value
    }
  }


  render() {
    return (
      <div>
        <div>Comfort</div>

          <ScaleStyle>
            <PointerStyle>▼</PointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>

          <ScaleStyle>
            <p>Poor</p>
            <p>Perfect</p>
          </ScaleStyle>

        <div>Quality</div>

          <ScaleStyle>
            <PointerStyle>▼</PointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>

          <ScaleStyle>
            <p>Poor</p>
            <p>Perfect</p>
          </ScaleStyle>

        <div>Fit</div>

          <ScaleStyle>
            <PointerStyle>▼</PointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>

          <ScaleStyle>
            <p>Runs tight</p>
            <p>Perfect</p>
            <p>Runs long</p>
          </ScaleStyle>

        <div>Length</div>

          <ScaleStyle>
            <PointerStyle>▼</PointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>

          <ScaleStyle>
            <p>Runs short</p>
            <p>Perfect</p>
            <p>Runs long</p>
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
  width: 73%;
`;

var ShadedStyle = styled.div`
  color: lightgray;
  background: lightgray;
  width: 32%;
  margin-top: 3px;
`;

var ComfortEndStyle = styled.div`
  color: lightgray;
  background: lightgray;
  width: 26%;
  margin-top: 3px;
`;

var ComfortMiddleStyle = styled.div`
  color: lightgray;
  background: lightgray;
  width: 45%;
  margin-top: 3px;
`;

var PointerStyle = styled.div`
  color: green;
  font-size: 14px;
  position: absolute;
`;
// left: % of rating  29.25% - 59%

export default ReviewBreakdown;