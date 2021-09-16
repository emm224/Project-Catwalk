import React from 'react';
import styled from 'styled-components';

class StarBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

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

        <StarBarGraphStyle>{this.percentRecommended()} of reviews recommend this product</StarBarGraphStyle>

        <StarBarGraphStyle>
          <u>5 star(s)</u>
          <ShadedStyle>x</ShadedStyle>
          <UnshadedStyle>x</UnshadedStyle>
        </StarBarGraphStyle>

        <StarBarGraphStyle>
          <u>4 star(s)</u>
          <ShadedStyle>x</ShadedStyle>
          <UnshadedStyle>x</UnshadedStyle>
        </StarBarGraphStyle>

        <StarBarGraphStyle>
          <u>3 star(s)</u>
          <ShadedStyle>x</ShadedStyle>
          <UnshadedStyle>x</UnshadedStyle>
        </StarBarGraphStyle>

        <StarBarGraphStyle>
          <u>2 star(s)</u>
          <ShadedStyle>x</ShadedStyle>
          <UnshadedStyle>x</UnshadedStyle>
        </StarBarGraphStyle>

        <StarBarGraphStyle>
          <u>1 star(s)</u>
          <ShadedStyle>x</ShadedStyle>
          <UnshadedStyle>x</UnshadedStyle>
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
`;

var ShadedStyle = styled.div`
  background: black;
  width: 80px;
  margin-left: 10px;
  color: black;
`;

var UnshadedStyle = styled.div`
  background: lightgray;
  width: 80px;
  color: lightgray;
  margin-right: 25px;
`;

var NumberStyle = styled.div`
  font-size: 48px;
  margin-right: 10px;
`;


export default StarBreakdown;