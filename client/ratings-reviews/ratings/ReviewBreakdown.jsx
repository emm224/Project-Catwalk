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
      <div>{console.log(this.state)}
        <div>Size</div>

          <ScaleStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <PointerStyle>▼</PointerStyle>
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
          <PointerStyle>▼</PointerStyle>
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
  width: 73%;
`;

var ShadedStyle = styled.div`
  color: lightgray;
  background: lightgray;
  width: 32%;
`;

var ComfortEndStyle = styled.div`
  color: lightgray;
  background: lightgray;
  width: 26%;
`;

var ComfortMiddleStyle = styled.div`
  color: lightgray;
  background: lightgray;
  width: 45%;
`;

var PointerStyle = styled.div`
  color: black;
  font-size: 15px;
  position: absolute;
`;

export default ReviewBreakdown;