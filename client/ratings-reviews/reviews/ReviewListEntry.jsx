import React from 'react';
import styled from 'styled-components';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      stars: this.props.review.rating
    }
  }

  componentDidMount() {
    this.formatDate();
    this.starRating();
  }

  formatDate() {
    // Get rid of unnecessary time zone and put into an array formatted MM/DD/YYYY
    let date = this.props.review.date.toString().slice(0,9).split('-').reverse();
    // Set numberical month to lexical month
    var months = ['0', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var i = Number(date[0]);
    date[0] = months[i] + ' ';
    // Get rid of extra 0 if applicable
    if (date[1][0] === '0') {
      date[1] = date[1][1];
    }
    date[1] = date[1] + ', ';
    // Join together and add to state
    var formatted = date.join('');
    this.setState({
      date: formatted
    })
  }

  starRating() {
    var filled = this.state.stars;
    var empty = 5 - filled;
    var stars = '';
    for (var i = 0; i < Math.floor(filled); i++) {
      stars += '★';
    }
    for (var i = 0; i < Math.ceil(empty); i++) {
      stars += '☆';
    }
    return stars;
  }

  conditionalResponse() {
    if (this.props.review.response === null) {
      return ;
    } else {
      return (
        <ResponseStyle>
          <ResponseHeaderStyle>Response: </ResponseHeaderStyle> <br></br>
          {this.props.review.response}
        </ResponseStyle>
      );
    }
  }

  markHelpful() {
    console.log('Review marked as helpful');
  }

  reportReview() {
    console.log('Review reported');
  }

  render () {
    return (
      <ReviewListEntryStyle>

        <TopRowStyle>
          <div>{this.starRating()}</div>
          <TopRightStyle>
            {this.props.review.reviewer_name}, {this.state.date}
          </TopRightStyle>
        </TopRowStyle>

        <SummaryStyle> <b>{this.props.review.summary}</b> </SummaryStyle>

        <SummaryStyle>{this.props.review.body}</SummaryStyle>

        {this.conditionalResponse()}


        <BottomRowStyle>
          <div>Helpful? </div>
          <ButtonStyle onClick={this.markHelpful}>Yes</ButtonStyle>
          <div>({this.props.review.helpfulness})</div>
          <BarStyle>|</BarStyle>
          <ButtonStyle onClick={this.reportReview}>Report</ButtonStyle>
        </BottomRowStyle>

      </ReviewListEntryStyle>
    );
  }

};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ReviewListEntryStyle = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid;
`;
var TopRowStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
var TopRightStyle = styled.div`
  font-size: 12px;
  color: gray;
`;
var SummaryStyle = styled.div`
  margin-bottom: 10px;
`;
var BottomRowStyle = styled.div`
  margin-bottom: 10px;
  font-size: 12px;
  color: gray;
  display: flex;
`;
var ResponseHeaderStyle = styled.div`
  color: black;
  font-weight: bold;
`;
var ResponseStyle = styled.div`
  margin-bottom: 10px;
  background-color: #E8E8E8;
  padding: 10px;
  margin-bottom: 10px;
  color: gray;
`;
var BarStyle = styled.div`
  margin-left: 15px;
  margin-right: 10px;
`;
var ButtonStyle = styled.div`
  cursor: default;
  text-decoration: underline;
  margin-left: 5px;
  margin-right: 5px;
`;

export default ReviewListEntry;
