import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PhotoEntry from './PhotoEntry.jsx';

class ReviewListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      stars: this.props.review.rating,
      helpfulness: this.props.review.helpfulness,
      helpful: false,
      report: false,
      id: this.props.review.review_id,
      text: 'Report',
      body: this.props.review.body,
      show: false
    }
    this.markHelpful = this.markHelpful.bind(this);
    this.reportReview = this.reportReview.bind(this);
    this.toggleBody = this.toggleBody.bind(this);
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
  toggleBody() {
    if (!this.state.show) {
      this.setState({
        show: true
      })
    } else {
      this.setState({
        show: false
      })
    }
  }
  conditionalBody() {
    if (this.state.body.length > 250) {
      if (!this.state.show) {
        return (
          <div>
            <SummaryStyle>{this.state.body.slice(0,251)}...</SummaryStyle>
            <ShowMore onClick={this.toggleBody}>Show more</ShowMore>
          </div>
        );
      } else {
        return (
          <div>
            <SummaryStyle>{this.state.body}</SummaryStyle>
            <ShowMore onClick={this.toggleBody}>Show less</ShowMore>
          </div>
        );
      }
    } else {
      return (
        <SummaryStyle>{this.props.review.body}</SummaryStyle>
      );
    }
  }
  conditionalResponse() {
    if (this.props.review.response !== null && this.props.review.response.length > 0) {
      return (
        <ResponseStyle>{console.log(this.props.review.response)}
          <ResponseHeaderStyle>Response: </ResponseHeaderStyle> <br></br>
          {this.props.review.response}
        </ResponseStyle>
      );
    }
  }
  conditionalRecommend() {
    if (this.props.review.recommend) {return (<RecommendStyle>✓ I recommend this product</RecommendStyle>);}
  }
  conditionalPhoto() {
    if (this.props.review.photos.length > 0) {
      return (
        <PhotosStyle>
          {this.props.review.photos.map((photo) => <PhotoEntry photo={photo.url} key={photo.id}/>)}
        </PhotosStyle>
      );
    }
  }
  markHelpful() {
    if (!this.state.helpful) {
      axios.put('/api/products/reviews/helpful', {id: this.props.review.review_id})
        .then((response) => {
          this.setState({
            helpful: true,
            helpfulness: this.props.review.helpfulness + 1
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
  reportReview() {
    if (!this.state.report) {
      axios.put('/api/products/reviews/report', {id: this.props.review.review_id})
        .then((response) => {
          this.setState({
            report: true,
            text: 'Reported'
          })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  render () {
    return (
      <div>
        {this.props.review ?
          <ReviewListEntryStyle>
            <TopRowStyle>
              <div>{this.starRating()}</div>
              <TopRightStyle>
                {this.props.review.reviewer_name}, {this.state.date}
              </TopRightStyle>
            </TopRowStyle>
            <SummaryStyle> <b>{this.props.review.summary}</b> </SummaryStyle>
            {/* <SummaryStyle>{this.props.review.body}</SummaryStyle> */}
            {this.conditionalBody()}
            {this.conditionalRecommend()}
            {this.conditionalResponse()}
            {this.conditionalPhoto()}
            <BottomRowStyle>
              <div>Helpful? </div>
              <ButtonStyle onClick={this.markHelpful}>Yes</ButtonStyle>
              <div>({this.state.helpfulness})</div>
              <BarStyle>|</BarStyle>
              <ButtonStyle onClick={this.reportReview}>{this.state.text}</ButtonStyle>
            </BottomRowStyle>
          </ReviewListEntryStyle>
        : ''}
      </div>
    );
  }
}

var ReviewListEntryStyle = styled.div`
  margin-top: 25px;
  margin-bottom: 25px;
  border-bottom: 1px solid;
`;
var TopRowStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-right: 10px;
`;
var TopRightStyle = styled.div`
  font-size: 12px;
  color: gray;
`;
var SummaryStyle = styled.div`
  margin-bottom: 10px;
`;
var RecommendStyle = styled.div`
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
  cursor: pointer;
  text-decoration: underline;
  margin-left: 5px;
  margin-right: 5px;
`;
var PhotosStyle = styled.div`
  display: flex;
  height: 100px;
  width: 100px;
  align-items: center;
  margin-left: 20px;
  margin-bottom: 10px;
`;
var ShowMore = styled.div`
  font-size: 10px;
  text-decoration: underline;
  text-align: right;
  margin-right: 20px;
  cursor: pointer;
`;
export default ReviewListEntry;
