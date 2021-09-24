import React from 'react';
import styled from 'styled-components';

class ReviewBreakdown extends React.Component {
  constructor(props) {
    super(props);
  }

  conditionalSize() {
    if(this.props.characteristics.Size) {
      var size = Math.round((this.props.characteristics.Size.value / 5) * 100) * .94;
      return (
        <div>
          <TextStyle>Size</TextStyle>
          <ScaleStyle>
            <SPointerStyle pos={size}>▼</SPointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>
          <ScaleStyle>
            <p>Runs small</p>
            <p>Perfect</p>
            <p>Runs big</p>
          </ScaleStyle>
        </div>
      );
    }
  }
  conditionalWidth() {
    if(this.props.characteristics.Width) {
      var width = Math.round((this.props.characteristics.Width.value / 5) * 100) * .94;
      return (
        <div>
          <TextStyle>Width</TextStyle>
          <ScaleStyle>
            <WPointerStyle pos={width}>▼</WPointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>
          <ScaleStyle>
            <p>Runs narrow</p>
            <p>Perfect</p>
            <p>Runs wide</p>
          </ScaleStyle>
        </div>
      );
    }
  }
  conditionalComfort() {
    if(this.props.characteristics.Comfort) {
      var comfort = Math.round((this.props.characteristics.Comfort.value / 5) * 100) * .94;
      // -1 min scale
      //94 max scale
      return (
        <div>
          <TextStyle>Comfort</TextStyle>
          <ScaleStyle>
            <CPointerStyle pos={comfort}>▼</CPointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>
          <ScaleStyle>
            <p>Poor</p>
            <p>Perfect</p>
          </ScaleStyle>
        </div>
      );
    }
  }
  conditionalQuality() {
    if(this.props.characteristics.Quality) {
      var quality = Math.round((this.props.characteristics.Quality.value / 5) * 100) * .94;
      return (
        <div>
          <TextStyle>Quality</TextStyle>
          <ScaleStyle>
            <QPointerStyle pos={quality}>▼</QPointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>
          <ScaleStyle>
            <p>Poor</p>
            <p>Perfect</p>
          </ScaleStyle>
        </div>
      );
    }
  }
  conditionalFit() {
    if(this.props.characteristics.Fit) {
      var fit = Math.round((this.props.characteristics.Fit.value / 5) * 100) * .94;
      return (
        <div>
          <TextStyle>Fit</TextStyle>
          <ScaleStyle>
            <FPointerStyle pos={fit}>▼</FPointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>
          <ScaleStyle>
            <p>Runs tight</p>
            <p>Perfect</p>
            <p>Runs long</p>
          </ScaleStyle>
        </div>
      );
    }
  }
  conditionalLength() {
    if(this.props.characteristics.Length) {
      var length = Math.round((this.props.characteristics.Length.value / 5) * 100) * .94;
      return (
        <div>
          <TextStyle>Length</TextStyle>
          <ScaleStyle>
            <LPointerStyle pos={length}>▼</LPointerStyle>
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

  render() {
    return (
      <div>
        {this.conditionalComfort()}
        {this.conditionalQuality()}
        {this.conditionalFit()}
        {this.conditionalSize()}
        {this.conditionalLength()}
        {this.conditionalWidth()}
      </div>
    );
  }
}

var TextStyle = styled.div`
  font-size: 12px;
`;
var ScaleStyle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  width: 73%;
  position: relative;
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
var CPointerStyle = styled.div`
  color: cornflowerblue;
  font-size: 14px;
  position: absolute;
  left: ${props => props.pos}%
`;
var QPointerStyle = styled.div`
  color: cornflowerblue;
  font-size: 14px;
  position: absolute;
  left: ${props => props.pos}%
`;
var FPointerStyle = styled.div`
  color: cornflowerblue;
  font-size: 14px;
  position: absolute;
  left: ${props => props.pos}%
`;
var LPointerStyle = styled.div`
  color: cornflowerblue;
  font-size: 14px;
  position: absolute;
  left: ${props => props.pos}%
`;
var SPointerStyle = styled.div`
  color: cornflowerblue;
  font-size: 14px;
  position: absolute;
  left: ${props => props.pos}%
`;
var WPointerStyle = styled.div`
  color: cornflowerblue;
  font-size: 14px;
  position: absolute;
  left: ${props => props.pos}%
`;

export default ReviewBreakdown;