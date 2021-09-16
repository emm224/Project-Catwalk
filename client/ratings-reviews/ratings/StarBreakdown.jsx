import React from 'react';
import styled from 'styled-components';

class StarBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      five: this.reviewDistribution(5),
      four: this.reviewDistribution(4),
      three: this.reviewDistribution(3),
      two: this.reviewDistribution(2),
      one: this.reviewDistribution(1)
    }
  }

  componentDidMount() {
    console.log(this.state);
  }

  percentRecommended() {
    var x = Number(this.props.recommended.true);
    var y = Number(this.props.recommended.false);
    var percent = Math.round((x / (x + y)) * 100) + '%';
    return percent;
  }
  reviewDistribution(n) {
    var count = this.props.ratings[n];
    var total = 0;
    for (var key in this.props.ratings) {
      total += Number(this.props.ratings[key]);
    }
    var percent = count / total * 100;
    if (Number.isNaN(percent)) {
      percent = 0;
    }
    return percent;
  }
  starAverage() {
    var ratings = this.props.ratings;
    var sumRatings = 0;
    var countRatings = 0;
    var averageRating;
    for (var key in ratings) {
      countRatings += Number(ratings[key]);
    }
    for (var key in ratings) {
      for (var i = 0; i < Number(ratings[key]); i++) {
        sumRatings += Number([key]);
      }
    }
    var averageRating = sumRatings / countRatings;
    var rounded = Math.round(averageRating * 10) /10;
    return rounded;
  }
  starDisplay() {
    var filled = this.starAverage();
    var empty = 5 - this.starAverage();
    var stars = '';
    for (var i = 0; i < Math.floor(filled); i++) {
      stars += '★';
    }
    for (var i = 0; i < Math.ceil(empty); i++) {
      stars += '☆';
    }
    return stars;
  }

  render() {
    return (
      <div>
        <StarBreakdownStyle>
          <NumberStyle>{this.starAverage()}</NumberStyle>
          <div>{this.starDisplay()}</div>
        </StarBreakdownStyle>
        <StarBarGraphStyle>
          {this.percentRecommended()} of reviews recommend this product
        </StarBarGraphStyle>
        <StarBarGraphStyle>
          <u>5 star(s)</u>
          <BarStyle>
            <FiveShadedStyle shade={this.state.five}>x</FiveShadedStyle>
            <FiveUnshadedStyle unshade={this.state.five}>x</FiveUnshadedStyle>
          </BarStyle>
        </StarBarGraphStyle>
        <StarBarGraphStyle>
          <u>4 star(s)</u>
          <BarStyle>
            <FourShadedStyle shade={this.state.four}>x</FourShadedStyle>
            <FourUnshadedStyle unshade={this.state.four}>x</FourUnshadedStyle>
          </BarStyle>
        </StarBarGraphStyle>
        <StarBarGraphStyle>
          <u>3 star(s)</u>
          <BarStyle>
            <ThreeShadedStyle shade={this.state.three}>x</ThreeShadedStyle>
            <ThreeUnshadedStyle unshade={this.state.three}>x</ThreeUnshadedStyle>
          </BarStyle>
        </StarBarGraphStyle>
        <StarBarGraphStyle>
          <u>2 star(s)</u>
          <BarStyle>
            <TwoShadedStyle shade={this.state.two}>x</TwoShadedStyle>
            <TwoUnshadedStyle unshade={this.state.two}>x</TwoUnshadedStyle>
          </BarStyle>
        </StarBarGraphStyle>
        <StarBarGraphStyle>
          <u>1 star(s)</u>
          <BarStyle>
            <OneShadedStyle shade={this.state.one}>x</OneShadedStyle>
            <OneUnshadedStyle unshade={this.state.one}>x</OneUnshadedStyle>
          </BarStyle>
        </StarBarGraphStyle>
        <br></br>
      </div>
    );
  }
}

var StarBreakdownStyle = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
var StarBarGraphStyle = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
  display: flex;
  width: 300px;
`;
var BarStyle = styled.div`
  width: 200px;
  display: flex;
  height: 10px;
`;
var NumberStyle = styled.div`
  font-size: 48px;
  margin-right: 10px;
`;
var OneShadedStyle = styled.div`
  background: black;
  width: ${props => props.shade}%;
  margin-left: 10px;
  color: black;
  font-size: 1px;
`;
var OneUnshadedStyle = styled.div`
  background: lightgray;
  width: ${props => 100 - props.unshade}%;
  color: lightgray;
  font-size: 1px;
  margin-right: 25px;
`;
var TwoShadedStyle = styled.div`
  background: black;
  width: ${props => props.shade}%;
  margin-left: 10px;
  color: black;
  font-size: 1px;
`;
var TwoUnshadedStyle = styled.div`
  background: lightgray;
  width: ${props => 100 - props.unshade}%;
  color: lightgray;
  font-size: 1px;
  margin-right: 25px;
`;
var ThreeShadedStyle = styled.div`
  background: black;
  width: ${props => props.shade}%;
  margin-left: 10px;
  color: black;
  font-size: 1px;
`;
var ThreeUnshadedStyle = styled.div`
  background: lightgray;
  width: ${props => 100 - props.unshade}%;
  color: lightgray;
  font-size: 1px;
  margin-right: 25px;
`;
var FourShadedStyle = styled.div`
  background: black;
  width: ${props => props.shade}%;
  margin-left: 10px;
  color: black;
  font-size: 1px;
`;
var FourUnshadedStyle = styled.div`
  background: lightgray;
  width: ${props => 100 - props.unshade}%;
  color: lightgray;
  font-size: 1px;
  margin-right: 25px;
`;
var FiveShadedStyle = styled.div`
  background: black;
  width: ${props => props.shade}%;
  margin-left: 10px;
  color: black;
  font-size: 1px;
`;
var FiveUnshadedStyle = styled.div`
  background: lightgray;
  width: ${props => 100 - props.unshade}%;
  color: lightgray;
  font-size: 1px;
  margin-right: 25px;
`;

export default StarBreakdown;