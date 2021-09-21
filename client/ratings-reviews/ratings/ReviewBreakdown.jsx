import React from 'react';
import styled from 'styled-components';

class ReviewBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comfort: Math.round((this.props.characteristics.Comfort.value / 5) * 100),
      fit: Math.round((this.props.characteristics.Fit.value / 5) * 100),
      length: Math.round((this.props.characteristics.Length.value / 5) * 100),
      quality: Math.round((this.props.characteristics.Quality.value / 5) * 100)
    }
  }

  // componentDidMount() {
  //   this.convertRatings();
  // }

  convertRatings() {
    var comfort = Math.round((this.props.characteristics.Comfort.value / 5) * 100);
    var fit = Math.round((this.props.characteristics.Fit.value / 5) * 100);
    var length = Math.round((this.props.characteristics.Length.value / 5) * 100)
    var quality = Math.round((this.props.characteristics.Quality.value / 5) * 100);

    this.setState({
      comfort: comfort,
      fit: fit,
      length: length,
      quality: quality
    });
  }


  render() {
    return (
      <div>
        <TextStyle>Comfort</TextStyle>

          <ScaleStyle>
            <CPointerStyle pos={this.state.comfort}>▼</CPointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>

          <ScaleStyle>
            <p>Poor</p>
            <p>Perfect</p>
          </ScaleStyle>

        <TextStyle>Quality</TextStyle>

          <ScaleStyle>
            <QPointerStyle pos={this.state.quality}>▼</QPointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>

          <ScaleStyle>
            <p>Poor</p>
            <p>Perfect</p>
          </ScaleStyle>

        <TextStyle>Fit</TextStyle>

          <ScaleStyle>
            <FPointerStyle pos={this.state.fit}>▼</FPointerStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
            <ShadedStyle>x</ShadedStyle>
          </ScaleStyle>

          <ScaleStyle>
            <p>Runs tight</p>
            <p>Perfect</p>
            <p>Runs long</p>
          </ScaleStyle>

        <TextStyle>Length</TextStyle>

          <ScaleStyle>
            <LPointerStyle pos={this.state.length}>▼</LPointerStyle>
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
  color: green;
  font-size: 14px;
  position: absolute;
  left: ${props => props.pos}%
`;
var QPointerStyle = styled.div`
  color: green;
  font-size: 14px;
  position: absolute;
  left: ${props => props.pos}%
`;
var FPointerStyle = styled.div`
  color: green;
  font-size: 14px;
  position: absolute;
  left: ${props => props.pos}%
`;
var LPointerStyle = styled.div`
  color: green;
  font-size: 14px;
  position: absolute;
  left: ${props => props.pos}%
`;

export default ReviewBreakdown;