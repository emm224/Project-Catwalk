import React from 'react';
import styled from 'styled-components';

class StarBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      '5': 0,
      '4': 0,
      '3': 0,
      '2': 0,
      '1': 0,
      c5: 0,
      c4: 0,
      c3: 0,
      c2: 0,
      c1: 0
    }
  }

  componentDidMount() {
    this.percentRecommended();
    this.starAverage();
    this.starDisplay();
    this.reviewDistribution();
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.ratings !== prevProps.ratings) {
      this.reviewDistribution();
    }
  };

  percentRecommended() {
    var x = Number(this.props.recommended.true);
    var y = Number(this.props.recommended.false);
    var percent = Math.round((x / (x + y)) * 100) + '%';
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
    var percent = Math.floor((filled - Math.floor(filled)) * 100);
    var empty = 5 - this.starAverage();
    var filledStars = '';
    var emptyStars = '';
    for (var i = 0; i < Math.floor(filled); i++) {
      filledStars += '★';
    }
    for (var i = 0; i < Math.floor(empty); i++) {
      emptyStars += '☆';
    }
    return (
      <StarStyles>{console.log(percent)}
        {filledStars}
        <HalfStarStyles width={percent}>
          <UShStyles>☆</UShStyles>
        </HalfStarStyles>
        {emptyStars}
      </StarStyles>
    );
  }
  reviewDistribution() {
    var one = this.props.ratings[1];
    var two = this.props.ratings[2];
    var three = this.props.ratings[3];
    var four = this.props.ratings[4];
    var five = this.props.ratings[5];
    var total = 0;
    for (var key in this.props.ratings) {
      total += Number(this.props.ratings[key]);
    }

    var oneP = one / total * 100;
    var twoP = two / total * 100;
    var threeP = three / total * 100;
    var fourP = four / total * 100;
    var fiveP = five / total * 100;

    if (Number.isNaN(oneP)) {
      oneP = 0;
    }
    if (Number.isNaN(twoP)) {
      twoP = 0;
    }
    if (Number.isNaN(threeP)) {
      threeP = 0;
    }
    if (Number.isNaN(fourP)) {
      fourP = 0;
    }
    if (Number.isNaN(fiveP)) {
      fiveP = 0;
    }
    this.setState({
      '5': fiveP,
      '4': fourP,
      '3': threeP,
      '2': twoP,
      '1': oneP ,
      c5: five,
      c4: four,
      c3: three,
      c2: two,
      c1: one
    });
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
            <FiveShadedStyle shade={this.state[5]}>x</FiveShadedStyle>
            <FiveUnshadedStyle unshade={this.state[5]}>x</FiveUnshadedStyle>
          </BarStyle>
          <StarCountStyle>{this.state.c5}</StarCountStyle>
        </StarBarGraphStyle>
        <StarBarGraphStyle>
          <u>4 star(s)</u>
          <BarStyle>
            <FourShadedStyle shade={this.state[4]}>x</FourShadedStyle>
            <FourUnshadedStyle unshade={this.state[4]}>x</FourUnshadedStyle>
          </BarStyle>
          <StarCountStyle>{this.state.c4}</StarCountStyle>
        </StarBarGraphStyle>
        <StarBarGraphStyle>
          <u>3 star(s)</u>
          <BarStyle>
            <ThreeShadedStyle shade={this.state[3]}>x</ThreeShadedStyle>
            <ThreeUnshadedStyle unshade={this.state[3]}>x</ThreeUnshadedStyle>
          </BarStyle>
          <StarCountStyle>{this.state.c3}</StarCountStyle>
        </StarBarGraphStyle>
        <StarBarGraphStyle>
          <u>2 star(s)</u>
          <BarStyle>
            <TwoShadedStyle shade={this.state[2]}>x</TwoShadedStyle>
            <TwoUnshadedStyle unshade={this.state[2]}>x</TwoUnshadedStyle>
          </BarStyle>
          <StarCountStyle>{this.state.c2}</StarCountStyle>
        </StarBarGraphStyle>
        <StarBarGraphStyle>
          <u>1 star(s)</u>
          <BarStyle>
            <OneShadedStyle shade={this.state[1]}>x</OneShadedStyle>
            <OneUnshadedStyle unshade={this.state[1]}>x</OneUnshadedStyle>
          </BarStyle>
          <StarCountStyle>{this.state.c1}</StarCountStyle>
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
  background: green;
  width: ${props => props.shade}%;
  margin-left: 10px;
  color: green;
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
  background: green;
  width: ${props => props.shade}%;
  margin-left: 10px;
  color: green;
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
  background: green;
  width: ${props => props.shade}%;
  margin-left: 10px;
  color: green;
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
  background: green;
  width: ${props => props.shade}%;
  margin-left: 10px;
  color: green;
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
  background: green;
  width: ${props => props.shade}%;
  margin-left: 10px;
  color: green;
  font-size: 1px;
`;
var FiveUnshadedStyle = styled.div`
  background: lightgray;
  width: ${props => 100 - props.unshade}%;
  color: lightgray;
  font-size: 1px;
  margin-right: 25px;
`;
var StarCountStyle= styled.div`
  vertical-align: top;
  margin-left: -16px;
  margin-top: -2px;
`;

var StarStyles = styled.div`
  display: flex;
`;

var HalfStarStyles = styled.div`
  background: linear-gradient(90deg, black  ${props => props.width}%, white ${props => 100 - props.width}%);
`;

var ShStyles = styled.div`
`;
var UShStyles = styled.div`
`;
//  background: linear-gradient(90deg, black  ${props => props.width}%, white ${props => 100 - props.width}%);
// ${props => 100 - props.width}%;
export default StarBreakdown;