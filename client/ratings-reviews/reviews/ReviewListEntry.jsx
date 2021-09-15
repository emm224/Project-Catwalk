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
    //console.log(this.state.stars);
  }

  render () {
    return (
      <ReviewListEntryStyle>

        <TopRowStyle>
          <div>★★★☆☆</div>
          <TopRightStyle>
            {this.props.review.reviewer_name}, {this.state.date}
          </TopRightStyle>
        </TopRowStyle>

        <SummaryStyle> <b>{this.props.review.summary}</b> </SummaryStyle>

        <SummaryStyle>{this.props.review.body}</SummaryStyle>

        <ResponseStyle>
          <b>Response: </b>
          <div>{this.props.review.response}</div>
        </ResponseStyle>


        <BottomRowStyle>Helpful? <u>Yes</u> ({this.props.review.helpfulness}) | <u>Report</u></BottomRowStyle>

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
`;

var ResponseStyle = styled.div`
  margin-bottom: 10px;
  background-color: #E8E8E8;
  padding: 10px;
  margin-bottom: 10px;
  color: gray;
`;

export default ReviewListEntry;
