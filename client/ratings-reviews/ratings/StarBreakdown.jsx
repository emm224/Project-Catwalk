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

  render() {
    return (
      <div>
        <StarBreakdownStyle>
          <NumberStyle>{this.starAverage()}</NumberStyle>
          <div>★★★☆☆</div>
        </StarBreakdownStyle>

        <StarBarGraphStyle>{this.percentRecommended()} of reviews recommend this product</StarBarGraphStyle>

        <StarBarGraphStyle><u>5 star(s) </u> =========================</StarBarGraphStyle>
        <StarBarGraphStyle><u>4 star(s)</u> =========================</StarBarGraphStyle>
        <StarBarGraphStyle><u>3 star(s)</u> =========================</StarBarGraphStyle>
        <StarBarGraphStyle><u>2 star(s)</u> =========================</StarBarGraphStyle>
        <StarBarGraphStyle><u>1 star(s) </u> =========================</StarBarGraphStyle>

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
`;

var NumberStyle = styled.div`
  font-size: 48px;
  margin-right: 10px;
`;


export default StarBreakdown;